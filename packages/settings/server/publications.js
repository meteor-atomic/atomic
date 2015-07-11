/**
 * Publish the settings to the client
 */
Meteor.publish("settings", function(){
  return Settings.collection.find({"public": true}, {
    _id: 0, key: 1, value: 1
  });
});
