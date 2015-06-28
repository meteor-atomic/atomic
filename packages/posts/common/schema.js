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
        var published = this.field('published');

        if(published.isSet && published.value == true)
          return false;

        return this.value;
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
    content: { type: String, label: "Markdown version of the post", optional: true, defaultValue: ""},

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
    categories: {type: [String], optional: false, defaultValue: []},

    /**
     * Revision History
     */
    revisions: {type: [Object], optional: true, autoValue: function() {
        var content = this.field("content");

        /**
         * @todo Add editor in here
         */
        if (content.isSet) {
          if(this.isInsert) {
            if(content.value != "")
              return [{ date: new Date, content: content.value, author: this.userId }];
            return this.unset();
          }

          // @todo Fix this push issue.
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
