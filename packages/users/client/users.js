/**
 * Attach the schema
 */
_.extend(Users, {

  /**
   * Subscription
   */
  subscription: function(options) {
    return Meteor.subscribe("users", options);
  }
});
