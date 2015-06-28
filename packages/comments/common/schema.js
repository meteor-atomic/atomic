/**
 * Attach the schema
 */
_.extend(Comments, {
  /**
   * Attach the schema to the server side namespace
   * @type {SimpleSchema}
   */
  schema: new SimpleSchema({

    /**
     * Author id
     * @type {Object}
     */
    author_id: {type: String, optional: true},

    /**
     * Author public name
     * @type {Object}
     */
    author_name: {type: String, optional: true},

    /**
     * Author email address
     * @type {Object}
     */
    author_email: {type: String, optional: true, regEx: SimpleSchema.RegEx.Email},

    /**
     * Author email address
     * @type {Object}
     */
    author_url: {type: String, optional: true, regEx: SimpleSchema.RegEx.Url},

    /**
     * Author's IP Address.. IPV4/6
     * @type {Object}
     */
    author_ip: {type: String, optional: true, regEx: SimpleSchema.RegEx.IP},

    /**
     * Created timestamp
     * @type {Object}
     */
    created: {type: Date, optional: false, autoValue: function() {
      if (this.isInsert) return new Date;
      if (this.isUpsert) return {$setOnInsert: new Date};
      this.unset();
    }},

    /**
     * Conent body
     * @type {Object}
     */
    content: {type: String, optional: false},

    /**
     * Is the post marked as spam
     * @type {Object}
     */
    spam: {type: Boolean, optional: false, autoValue: function(){
      // @todo  we can check to see if the post has come
      //        from an administrator, if se we return false.
      if(this.isInsert)
        return false;
    }}
  })
});

/**
 * Attach the schema to the collection for
 * validation and sanitation.
 */
Comments.collection.attachSchema(Comments.schema);
