/**
 * Administration publications
 */

/**
 * Publish all posts to the admin console
 */
Meteor.publish("admin.posts", function(){
  if(!Roles.userIsInRole(this.userId, ['admin'])) return [];

  return Posts.collection.find({});
});

/**
 * Publish all draft posts to the admin console
 */
Meteor.publish("admin.posts", function(){
  if(!Roles.userIsInRole(this.userId, ['admin'])) return [];

  return Posts.collection.find({draft: true});
});

/**
 * Publish a single psot to the admin
 */
Meteor.publish("admin.post", function(id){
  if(!Roles.userIsInRole(this.userId, ['admin'])) return [];

  return Posts.collection.find({_id: id});
});


/**
 * Publish a single psot to the admin
 */
Meteor.publish("admin.categories", function(id){
  if(!Roles.userIsInRole(this.userId, ['admin'])) return [];

  return Categories.collection.find();
});

/**
 * Publish all user accounts
 */
Meteor.publish("admin.users", function(id){
  if(!Roles.userIsInRole(this.userId, ['admin'])) return [];

  return Users.collection.find();
});
