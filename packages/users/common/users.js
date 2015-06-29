/**
 * Add the collection
 */
_.extend(Users, {
  /**
   * Add the collection
   * @type {Meteor}
   */
  collection:  Meteor.users,

  /**
   * Fetch a user account
   */
  all: function(callback) {
    return Users.collection.find({}, {}, callback);
  },

  /**
   * Fetch a user account
   */
  get: function(id, callback) {
    return Users.collection.findOne({_id: id}, {}, callback);
  },

  /**
   * Fetch a user account
   */
  getProfile: function(id, callback) {
    return Users.get(id, callback).profile;
  }
});
