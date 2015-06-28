/**
 * Publish the
 */
Meteor.publish("commentsByPostId", function(postId) {
  check(postId, String);

  return Comments.getByPostId(postId);
})
