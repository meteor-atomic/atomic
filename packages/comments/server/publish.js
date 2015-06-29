/**
 * Publish the
 */
Meteor.publish("comments", function() {
  return Comments.all();
});
