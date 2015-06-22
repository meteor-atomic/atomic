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
   * Create a new draft post object
   */
  draft: function() {
    return Posts.collection.insert({
      content: "",
      draft: true
    });
  },

  /**
   * Update a post entity with changes given in a key/value
   * pair.
   */
  update: function(postId, changes) {
    return Posts.collection.update({_id: postId}, {"$set": changes});
  },

  /**
   * Add a tag to a blog post
   * @param {String} postId Post ids
   * @param {String} tag    Tag value
   */
  addTags: function(postId, tags) {
    Posts.collection.update({_id: postId}, {"$addToSet": {tags: {"$each": tags}}});
  },

  /**
   * Add a tag to a blog post
   * @param {String} postId Post ids
   * @param {String} tag    Tag value
   */
  removeTag: function(postId, tag) {
    Posts.collection.update({_id: postId}, {"$pull": {tags: tag}});
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
    return Posts.collection.find();
  },

  /**
   * Find
   * @param  {[type]} clause [description]
   * @return {[type]}        [description]
   */
  where: function(clause) {
    return Posts.collection.find(clause);
  },

  /**
   * Return a single post
   * @param  {String} id Post id
   * @return {Document}
   */
  get: function(id) {
    return Posts.collection.findOne({_id: id});
  },

  /**
   * Remove a post
   * @param  {Stirng} id object ID
   */
  remove: function(id) {
    return Posts.collection.remove({_id: id});
  }
});
