/**
 * Posts helpers
 */
Template.AdminPostsView.helpers({
  /**
   * Return a list of all posts were subscribed to
   * @return {Cursor}
   */
  posts: function() {
    return Posts.all();
  },

  /**
   * Returna date string
   */
  date: function() {
    return this.createdAt;
  }
});
