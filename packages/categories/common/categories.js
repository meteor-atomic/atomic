/**
 * Add the collection
 */
_.extend(Categories, {
  /**
   * Add the collection
   * @type {Meteor}
   */
  collection:  new Meteor.Collection('categories'),

  /**
   * Create a new category
   * @param  {String} name        Unique category name
   * @param  {String} description Description for the category
   */
  subscription: function(options, callback) {
  	return Meteor.subscribe("categories", options, callback);
  },


  /**
   * Create a new category
   * @param  {String} name        Unique category name
   * @param  {String} description Description for the category
   */
  create: function(name, description, slug, callback) {
  	return Categories.collection.insert({
  		name: name,
  		slug: Utilities.slugify(slug || name),
  		description: description
  	}, callback);
  },

  /**
   * Return all categories
   * @return {Cursor} Category listing
   */
  all: function(callback) {
  	return Categories.collection.find({}, callback);
  },

  /**
   * Return all categories
   * @return {Cursor} Category listing
   */
  get: function(id, callback) {
  	return Categories.collection.findOne({_id: id}, callback);
  }
});
