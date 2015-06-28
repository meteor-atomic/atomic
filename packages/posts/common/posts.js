/**
 * Common methods for the Posts model.
 */
_.extend(Posts, {
  /**
   * Add the collection
   * @type {Meteor}
   */
  collection:  new Meteor.Collection('posts'),

  /**
   * Return the top latest posts
   * @return {Mongo.Cursor}
   */
  all: function(callback) {
    return Posts.collection.find({}, {}, callback);
  },

  /**
   * Inserts a new post into the post collection
   * @param  {Object}   post     Inital data to set in the collection
   * @param  {Function} callback Optional callback
   * @return {String}            MongoID for the new entity
   */
  create: function(post, callback) {
    return Posts.collection.insert(post, callback);
  },

  /**
   * Return a single post
   * @param  {String} id Post id
   * @return {Document}
   */
  get: function(id, callback) {
    return Posts.collection.findOne({_id: id}, {}, callback);
  },

  /**
   * Update an entities properties
   * @param  {String}   id        Post id for the target entity
   * @param  {Object}   changes   Key/Value pair of changes to be applied
   * @param  {Function} callback  Callback
   * @return {Number}
   */
  update: function(id, changes, callback) {
    return Posts.collection.update({_id: id}, {"$set": changes}, {multi: false}, callback);
  },

  /**
   * Remove a post
   * @param  {Stirng} id object ID
   */
  remove: function(id, callback) {
    return Posts.collection.remove({_id: id}, callback);
  },

  /**
   * Create a new draft post object
   * @param  {Function} callback Callback
   * @return {String}            MongoID for the new draft draft entity.
   */
  draft: function(callback) {
    return Posts.create({title: "Draft", draft: true}, callback);
  },

  /**
   * Add a tag to a blog post
   * @param {String} id Post ids
   * @param {String} tag    Tag value
   */
  addTags: function(id, tags, callback) {
    Posts.collection.update({_id: id}, {"$addToSet": {tags: {"$each": tags}}}, callback);
  },

  /**
   * Add a tag to a blog post
   * @param {String} id Post ids
   * @param {String} tag    Tag value
   */
  removeTag: function(id, tag, callback) {
    Posts.collection.update({_id: id}, {"$pull": {tags: tag}}, callback);
  },

  /**
   * Add a category to a blog post
   * @param {String} id     Post id
   * @param {String} categroy   Category id
   */
  addCategory: function(id, category, callback) {
    Posts.collection.update({_id: id}, {"$addToSet": {categories: category}}, callback);
  },

  /**
   * Add a category to a blog post
   * @param {String} id     Post ids
   * @param {String} category   Tag value
   */
  removeCategory: function(id, category, callback) {
    Posts.collection.update({_id: id}, {"$pull": {categories: category}}, callback);
  },

  /**
   * Return the top latest posts
   * @return {Mongo.Cursor}
   */
  latest: function(limit, callback) {
    return Posts.collection.find({}, {"$limit": limit || 10}, callback)
  },

  /**
   * Return the latest published Posts
   * @return {Mongo.Cursor}
   */
  published: function(callback) {
    return Posts.where({published: true, draft: false}, callback);
  },

  /**
   * Find a set of post based on a selection
   * @param  {[type]} clause [description]
   * @return {[type]}        [description]
   */
  where: function(clause, callback) {
    return Posts.collection.find(clause, {}, callback);
  }
});
