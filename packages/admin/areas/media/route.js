/**
 * Doashbaord Route
 */
AdminRouter.route("/media", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.media",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
  },

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Media");

    // Render the view
    Layout.render("DefaultAdminLayout", {
      view: "AdminMediaView"
    });
  }
})
