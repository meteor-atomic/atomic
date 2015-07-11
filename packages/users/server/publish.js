/**
 * Users publication
 * @param  {Object} options  Options for this subscription
 * @return {Cursor}
 */
Meteor.publish("users", function(options) {
  return Users.all();
})
