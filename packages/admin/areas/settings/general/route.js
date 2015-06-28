/**
 * Doashbaord Route
 */
AdminRouter.route("/settings/general", {
  name: "admin.settings.general",

  /**
   * Setup draft subscriptions
   */
  subscriptions: function() {},

  /**
   * Render drafts view
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("General " + Atomic.seperator + " Settings");

    // Render the view
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminSettingsGeneralView"
    });
  }
})
