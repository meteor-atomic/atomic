/**
 * Doashbaord Route
 */
AdminRouter.route("/users/", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.users",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
    this.register("users", Users.subscription({admin: true}));
  },

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Users");

    // Render the view
    Layout.render("DefaultAdminLayout", {
      view: "AdminUsersView"
    });
  }
})
