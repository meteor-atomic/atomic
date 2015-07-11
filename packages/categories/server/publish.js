/**
 * Categories Publication
 * @param  {Object} options Publication Options
 * @return {Cursor}
 */
Meteor.publish("categories", function(options) {
  return Categories.collection.find({});
})
