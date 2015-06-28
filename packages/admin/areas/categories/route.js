/**
 * Doashbaord Route
 */
AdminRouter.route("/categories", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.categories",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
    this.register("categories", Categories.subscription({admin:true}));
  },

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Categories");

    // Render the view
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminCategoriesView"
    });
  }
})
