/**
 * Define the Users structure
 */
Users = {};

/**
 * Add the collection
 */
_.extend(Users, {
  /**
   * Add the collection
   * @type {Meteor}
   */
  collection:  Meteor.users
});