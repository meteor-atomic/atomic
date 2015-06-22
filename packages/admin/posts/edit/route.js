/**
 * Doashbaord Route
 */
AdminRouter.route("/posts/edit/:id", {
  /**
   * Dashbaord name
   * @type {String}
   */
  name: "admin.posts.edit",

  /**
   * Susbscriptions
   */
  subscriptions: function(params, queryParams) {
    this.register("posts", Posts.subscription(params.id));
  },

  /**
   */
  action: function(params, queryParams) {
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminPostEditView",
      id: params.id
    });
  }
})
