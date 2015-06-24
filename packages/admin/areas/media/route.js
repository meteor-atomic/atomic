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
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminMediaView"
    });
  }
})
