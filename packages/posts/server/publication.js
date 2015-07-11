/**
 * Posts publication
 * @param  {Object}  Publication Options
 * @return {Cursor}
 */
Meteor.publish("posts", function(options) {
  options = options || {};
  console.log(options);
  check(options, Object);

  // Declare query
  var query = {
    published: true,
    draft: false
  };

  // Allow specific query params
  _.extend(query, _.pick(options.query || {}, ['_id']));

  // Define projection
  var projection = {
    sort: {updatedAt: -1, createdAt: -1}
  };

  /**
   * If we are request admin make sure we have admin
   */
  if(options.admin && Roles.userIsInRole(this.userId, ['admin'])) {

    // Dont force published
    delete query.published;
    delete query.draft;

    // Mixing the query
    _.extend(query, options.query);
  }

  return Posts.collection.find(query, projection);
});
