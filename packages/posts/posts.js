/**
 * Define the Posts structure
 */
Posts = {};

/**
 * Add the collection
 */
_.extend(Posts, {
  /**
   * Add the collection
   * @type {Meteor}
   */
  collection:  new Meteor.Collection('posts'),

  /**
   * Create a post
   */
  create: function(post) {
    return Posts.collection.insert(post);
  },

  /**
   * Return the top latest posts
   * @return {Mongo.Cursor}
   */
  latest: function() {
    return Posts.collection.find({}, {"$limit": 10})
  },

  /**
   * Return the top latest posts
   * @return {Mongo.Cursor}
   */
  all: function() {
    return Posts.collection.find({});
  },

  /**
   * Return a single post
   * @param  {String} id Post id
   * @return {Document}
   */
  get: function(id) {
    return Posts.collection.findOne({_id: id});
  }
});