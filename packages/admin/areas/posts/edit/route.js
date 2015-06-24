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
    this.register("post", Posts.subscription({
      admin: true,
      query: {_id: params.id}
    }));
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
