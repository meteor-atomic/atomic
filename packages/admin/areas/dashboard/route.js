/**
 * Doashbaord Route
 */
AdminRouter.route("/dashboard", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.dashboard",

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Dashboard");

    // Render the view
    Layout.render("DefaultAdminLayout", {
      view: "AdminDashboardView"
    });
  }
})
