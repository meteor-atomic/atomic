/**
 * Attach the schema
 */
_.extend(Categories, {
  /**
   * Attach the schema to the server side namespace
   * @type {SimpleSchema}
   */
  schema: new SimpleSchema({
  	name: {type: String, label: "Category name", index: true, min: 3, max: 45, unique: true},
  	slug: {type: String, label: "Category slug", index: true, max: 45},
  	description: {type: String, max: 1024}
  })
});

// Category permissions
Categories.collection.permit(['insert', 'remove', 'update']).ifHasRole(['admin']).apply();
