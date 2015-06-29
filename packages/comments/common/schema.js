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
     * Author id, this is automatically populated on insert
     * @type {Object}
     */
    author_id: {type: String, optional: true, autoValue: function(){
      /**
       * Rules:
       * 1. If there is a user id then set it
       */
      return this.userId;
    }},

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
    author_ip: {type: String, optional: false, regEx: SimpleSchema.RegEx.IP, autoValue: function() {
      /**
       * We can only get the author IP's address if there is a clinet invocation.
       */
      var invocation = DDP._CurrentInvocation.get();

      // Check for the invocation, always undefined on client/
      if(invocation)
        return invocation.connection.clientAddress;

      // On the client return the default IP, this also occurs of there is no invocation on the
      // server side, so from terminal or something.
      return '0.0.0.0';
    }},

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
    spam: {type: Boolean, optional: false, autoValue: function() {
      if(Meteor.isServer && this.isInsert && !this.isFromTrustedCode) {
        try{

          var paylaod = {
            author_ip:            this.field("author_ip").value,
            comment_content:      this.field("content").value || "",
            comment_type:         "comment",
            is_test:              true
          };

          if(this.field("author_id").isSet) {
            console.log("here", Users);
            // payload.comment_author        = this.field("author_name").value;
            // payload.comment_author_email  = this.field("author_email").value;
            // payload.comment_author_url    = this.field("author_url").value;
          }

          console.log(payload);
          // Askimet.checkSpam()
        }catch(e) {
          // As we cannot check spam we mark as not-spam and let the user handle it.
          return false;
        }
      }

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
