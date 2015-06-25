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
  create: function(post, callback) {
    return Posts.collection.insert(post, callback);
  },

  /**
   * Create a new draft post object
   */
  draft: function(callback) {
    return Posts.collection.insert({
      title:    "Draft",
      content:  "",
      draft: true
    }, callback);
  },

  /**
   * Update a post entity with changes given in a key/value
   * pair.
   */
  update: function(postId, changes, callback) {
    return Posts.collection.update({_id: postId}, {"$set": changes}, callback);
  },

  /**
   * Add a tag to a blog post
   * @param {String} postId Post ids
   * @param {String} tag    Tag value
   */
  addTags: function(postId, tags, callback) {
    Posts.collection.update({_id: postId}, {"$addToSet": {tags: {"$each": tags}}}, callback);
  },

  /**
   * Add a tag to a blog post
   * @param {String} postId Post ids
   * @param {String} tag    Tag value
   */
  removeTag: function(postId, tag, callback) {
    Posts.collection.update({_id: postId}, {"$pull": {tags: tag}}, callback);
  },

  /**
   * Add a category to a blog post
   * @param {String} postId     Post id
   * @param {String} categroy   Category id
   */
  addCategory: function(postId, category, callback) {
    Posts.collection.update({_id: postId}, {"$addToSet": {categories: category}}, callback);
  },

  /**
   * Add a category to a blog post
   * @param {String} postId     Post ids
   * @param {String} category   Tag value
   */
  removeCategory: function(postId, category, callback) {
    Posts.collection.update({_id: postId}, {"$pull": {categories: category}}, callback);
  },

  /**
   * Return the top latest posts
   * @return {Mongo.Cursor}
   */
  latest: function(limit, callback) {
    return Posts.collection.find({}, {"$limit": limit || 10}, callback)
  },

  /**
   * Return the top latest posts
   * @return {Mongo.Cursor}
   */
  all: function(callback) {
    return Posts.collection.find({}, {}, callback);
  },

  /**
   * Find
   * @param  {[type]} clause [description]
   * @return {[type]}        [description]
   */
  where: function(clause, callback) {
    return Posts.collection.find(clause, {}, callback);
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
   * Remove a post
   * @param  {Stirng} id object ID
   */
  remove: function(id, callback) {
    return Posts.collection.remove({_id: id}, callback);
  }
});
