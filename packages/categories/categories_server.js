/**
 * Attach the schema
 */
_.extend(Categories, {
  /**
   * Attach the schema to the server side namespace
   * @type {SimpleSchema}
   */
  schema: new SimpleSchema({

  	name: {type: String, label: "Category name", index: 1, min: 3, max: 45},
  	slug: {type: String, label: "Category slug", index: 1, max: 45},
  	description: {type: String, max: 1024}
  })
});

/**
 * Publish the categories
 */
Meteor.publish("categories", function() {
	return Categories.collection.find({});
})