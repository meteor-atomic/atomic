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
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminSettingsGeneralView"
    });
  }
})
