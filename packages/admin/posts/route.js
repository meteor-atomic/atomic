/**
 * Doashbaord Route
 */
AdminRouter.route("/posts", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.posts",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
    this.register("posts", Posts.subscription({admin:true}));
  },

  /**
   */
  action: function(params, queryParams) {
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminPostsView"
    });
  }
})
