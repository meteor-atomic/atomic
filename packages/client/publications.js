/**
 * Publications for frontend blog
 */
Meteor.publish("blog.posts", function() {
  return Posts.collection.find({published: true, draft: false});
});

/**
 * Publish a single post
 */
Meteor.publish("blog.post", function(id) {
  return Posts.collection.find({published: true, draft: false, _id: id});
});


/**
 * Publish a single post
 */
Meteor.publish("blog.categories", function(id) {
  return Categories.collection.find();
});
