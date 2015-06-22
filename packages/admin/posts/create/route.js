/**
 * Doashbaord Route
 */
AdminRouter.route("/posts/new", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.posts.new",

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
      view: "AdminNewPostView"
    });
  }
})
