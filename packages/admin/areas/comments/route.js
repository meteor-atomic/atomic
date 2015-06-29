/**
 * Doashbaord Route
 */
AdminRouter.route("/comments/", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.comments",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
    this.register("comments", Comments.subscription({admin: true}));
  },

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Comments");

    // Render the view
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminCommentsView"
    });
  }
})
