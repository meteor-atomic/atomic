/**
 * Users publication
 */
Meteor.publish("users", function() {
  return Users.all();
})
