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
    this.register("posts", Posts.subscription({admin:true}, function(err){
      if(err) Notify.exception(err);
    }));
  },

  /**
   */
  action: function(params, queryParams) {
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminPostsView"
    });
  }
})
