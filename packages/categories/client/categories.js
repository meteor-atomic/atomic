/**
 * Common methods for the Categories model.
 */
_.extend(Categories, {
  /**
   * @todo Move this to the client
   */
  subscription: function(options, callback) {
    return Meteor.subscribe("categories", options, callback);
  }
});
