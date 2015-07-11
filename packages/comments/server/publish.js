/**
 * Comments publication
 * @param  {Object} options  Publication Options
 * @return {Cursor}
 */
Meteor.publish("comments", function(options) {
  return Comments.all();
});
