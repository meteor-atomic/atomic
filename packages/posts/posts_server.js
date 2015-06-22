/**
 * Attach the schema
 */
_.extend(Posts, {
  /**
   * Attach the schema to the server side namespace
   * @type {SimpleSchema}
   */
  schema: new SimpleSchema({
    /**
     * Post Title
     */
    title: { type: String, label: "Title", max: 255, optional: true},

    /**
     * Draft mode.
     * @type {Object}
     */
    draft: {type: Boolean, optional:true, autoValue: function(){
        return true;
      }
    },

    published: {type: Boolean, optional:true, autoValue: function() {
        var published = this.field("published");

        /**
         * When an update comes in with a value of true.
         * Make sure we overwrite the draft marker
         */
        if(published.value == true)
          this.field("draft").value = false;

        return published.value;
      }
    },

    /**
     * Post summary
     */
    summary: { type: String, label: "Post summery", max: 1024, optional:  true},

    /**
     * Post slug
     */
    slug: {type: String, label: "Post slug", optional: true, index: 1, max: 255, autoValue: function() {
        var title = this.field("title");
        if(title.isSet)
          return Utilities.slugify(title.value);
      }
    },

    /**
     * Added basic tags array
     * @todo if this is empty on insert then maybe auto detect tags?
     * @type {Object}
     */
    tags: { type: [String], optional: true},

    /**
     * Raw markdown content
     */
    content: { type: String, label: "Markdown version of the post", optional: true},

    /**
     * @todo
     */
    html : { type: String, label: "Html version of the post", optional: true, autoValue: function() {
            var content = this.field("content");

            /**
             * @todo Add editor in here
             */
            if (content.isSet) {
              return marked(content.value)
            }
        }
    },

    /**
     * creator
     * @type {Object}
     */
    creator: { type: String, optional: true, autoValue: function(){
        if(this.isInsert)
          return this.userId;

        // XXX We dont ever really want to update the owner
        // we may put a special condition here depending
        // on what features we develop.
        this.unset()
      }
    },

    /**
     * Post created at
     */
    createdAt: { type: Date, label: "Date the post was created", denyUpdate: true, autoValue: function() {
        if (this.isInsert)
          return new Date;

        if(this.isUpsert)
          return {$setOnInsert: new Date};

        this.unset();
      }
    },

    /**
     * Post Update at
     */
    updatedAt: { type:Date, optional: true, autoValue: function(){
        if(this.isUpdate || (this.isInsert && !this.isSet)) return new Date();
      }
    },

    /**
     * Category id's that the post belongs too.
     */
    categories: {type: [Categories.collection], optional: true, defaultValue: []},

    // /**
    //  * Revision History
    //  */
    // revisions: {type: [Object], optional:true,autoValue: function() {
    //     var content = this.field("content");

    //     /**
    //      * @todo Add editor in here
    //      */
    //     if (content.isSet) {
    //       if(this.isInsert && content.value != "") {
    //         return [{ date: new Date, content: content.value, author: this.userId }];
    //       }

    //       return { $push: { date: new Date, content: content.value, author: this.userId } };
    //     }
    //   }
    // },

    // /**
    //  * Auto populated by revisions pass
    //  */
    // 'revisions.$.date': { type: Date, optional: true },

    // /**
    //  * Auto populated by revisions pass
    //  */
    // 'revisions.$.content': { type: String, optional: true },

    // /**
    //  * Auto populated by revisions pass
    //  */
    // 'revisions.$.author': { type: String, optional: true },
  })
});

/**
 * Attach the schema to the collection for
 * validation and sanitation.
 */
Posts.collection.attachSchema(Posts.schema);

/**
 * Configure collection security
 */
Posts.collection.allow({
  /**
   * @todo The user must have the writer permission
   */
  insert: function(userId, document) {
    return Roles.userIsInRole(userId, ['admin', 'writer']) && document.creator == userId;
  },

  /**
   * @todo The user must have the editor permission
   *       or own the document.
   */
  update: function (userId, document, fields, modifier) {
    return Roles.userIsInRole(userId, ['admin', 'editor']);
  },

  /**
   * Remove a document
   * @return {[type]} [description]
   */
  remove: function(userId, document){
    var isAdmin   = Roles.userIsInRole(userId, ['admin']);
    var isWriter  = Roles.userIsInRole(userId, ['writer']);
    var isEditor  = Roles.userIsInRole(userId, ['editor']);

    return  isAdmin || ((isWriter || isEditor) && document.creator == userId);
  }
});

/**
 * Publish the psots collection excluding the content,
 * the content is raw markdown and is converted to the html
 * key on save, so sending this over the wire is quite pointless.
 *
 * @todo Think about private, unpublsihed posts
 */
Meteor.publish("posts", function() {
  return Posts.collection.find({}, {
    sort: {updatedAt: -1, createdAt: -1}
  })
})
