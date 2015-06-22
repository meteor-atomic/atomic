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
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminDashboardView"
    });
  }
})
