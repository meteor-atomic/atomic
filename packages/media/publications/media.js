/**
 * Publish all media
 */
Meteor.publish(Media.collectionId, function() {
  return Media.collection.find({});
});
