/**
 * Comments controller
 */

/**
 * Helpers
 */
Template.AdminCommentsView.helpers({
  /**
   * Return all the comments
   */
  comments : function() {
    console.log(Comments.all().fetch());
    return Comments.all();
  }
})
