/**
 * Common methods for the Comments model.
 */
_.extend(Comments, {
  /**
   * Add the collection
   * @type {Meteor}
   */
  collection:  new Meteor.Collection('comments'),

  /**
   * Return all comments
   * @param  {Function} callback Callback
   * @return {Cursor}
   */
  all: function(callback) {
    return Comments.collection.find({}, {}, callback);
  },

  /**
   * Create a new comment
   * @param  {Object}   comment  Comment object
   * @param  {Function} callback Callback
   * @return {String}            Comment id (server-only)
   */
  create: function(comment, callback) {

    // We need to runt he comment through clean as it's not done automatically
    // on the client
    if(Meteor.isClient)
      comment = Comments.schema.clean(comment);

    // Insert the cleaned document
    Comments.collection.insert(comment, callback);
  }
});
