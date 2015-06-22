/**
 * Doashbaord Route
 */
AdminRouter.route("/", {
  /**
   * Index name
   * @type {String}
   */
  name: "admin",

  /**
   * Redirect to the dashbaord as this is just a lander
   * page.
   */
  action: function() {
    Router.go("admin.dashboard");
  }
})
