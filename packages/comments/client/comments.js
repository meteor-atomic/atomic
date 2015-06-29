/**
 * Common methods for the Comments model.
 */
_.extend(Comments, {
  /**
   *
   */
  subscription: function(options) {
    return Meteor.subscribe("comments", options);
  }
});
