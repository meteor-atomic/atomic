/**
 * Doashbaord Route
 */
AdminRouter.route("/posts", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.posts",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
    this.register("admin.posts", Meteor.subscribe("admin.posts"));
  },

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Posts");

    // Render the view
    Layout.render("DefaultAdminLayout", {
      view: "AdminPostsView"
    });
  }
})
