/**
 * Extend the media package for server side
 * functionality.
 */
_.extend(Media, {
  /**
   * Subscription
   */
  subscription: function() {
    return Meteor.subscribe(Media.collectionId);
  }
});
