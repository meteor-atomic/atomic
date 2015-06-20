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
    title: { type: String, label: "Title", max: 255 },

    /**
     * Post summary
     */
    summary: { type: String, label: "Post summery", max: 1024},

    /**
     * Post slug
     */
    slug: {type: String, label: "Post slug", index: 1, max: 255, autoValue: function() {
        var title = this.field("title");
        if(title.isSet)
          return Utilities.slugify(title.value);
      }
    },

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
    categories: {type: [Categories.collection], optional: true},

    /**
     * Revision History
     */
    revisions: {type: [Object], optional:true, autoValue: function() {
        var content = this.field("content");

        /**
         * @todo Add editor in here
         */
        if (content.isSet) {
          if(this.isInsert) {
            return [{ date: new Date, content: content.value, author: this.userId }];
          }

          return { $push: { date: new Date, content: content.value, author: this.userId } };
        }
      }
    },

    /**
     * Auto populated by revisions pass
     */
    'revisions.$.date': { type: Date, optional: true },

    /**
     * Auto populated by revisions pass
     */
    'revisions.$.content': { type: String, optional: true },

    /**
     * Auto populated by revisions pass
     */
    'revisions.$.author': { type: String, optional: true },
  })
});

/**
 * Attach the schema to the collection for
 * validation and sanitation.
 */
Posts.collection.attachSchema(Posts.schema);

/**
 * Publish the psots collection excluding the content,
 * the content is raw markdown and is converted to the html
 * key on save, so sending this over the wire is quite pointless.
 *
 * @todo Think about private, unpublsihed posts
 */
Meteor.publish("posts", function() {
  return Posts.collection.find({}, {fields: {content: 0}})
})