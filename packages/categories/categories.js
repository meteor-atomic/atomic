/**
 * Define the Posts structure
 */
Categories = {};

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
  subscription: function(options) {
  	return Meteor.subscribe("categories", options);
  },


  /**
   * Create a new category
   * @param  {String} name        Unique category name
   * @param  {String} description Description for the category
   */
  create: function(name, description, slug) {
  	return Categories.collection.insert({
  		name: name,
  		slug: Utilities.slugify(slug || name),
  		description: description
  	});
  },

  /**
   * Return all categories
   * @return {Cursor} Category listing
   */
  all: function() {
  	return Categories.collection.find();
  },

  /**
   * Return all categories
   * @return {Cursor} Category listing
   */
  get: function(id) {
  	return Categories.collection.findOne({_id: id});
  }
});
