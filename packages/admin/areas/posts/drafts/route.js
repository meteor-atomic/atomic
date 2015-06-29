/**
 * Doashbaord Route
 */
AdminRouter.route("/posts/drafts", {
  name: "admin.posts.drafts",

  /**
   * Setup draft subscriptions
   */
  subscriptions: function() {
    this.register("drafts", Meteor.subscribe("admin.drafts"));
  },

  /**
   * Render drafts view
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Drafts " + Atomic.seperator + " Posts");

    // Render the view
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminPostDraftsView"
    });
  }
})
