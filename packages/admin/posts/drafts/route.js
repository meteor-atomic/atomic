/**
 * Doashbaord Route
 */
AdminRouter.route("/posts/drafts", {
  name: "admin.posts.drafts",

  /**
   * Setup draft subscriptions
   */
  subscriptions: function() {
    this.register("drafts", Posts.subscription({
      admin: true,
      query: {draft: true}
    }, function(err){
      if(err) Notify.exception(err);
    }));
  },

  /**
   * Render drafts view
   */
  action: function(params, queryParams) {
    FlowLayout.render("DefaultAdminLayout", {
      view: "AdminPostDraftsView"
    });
  }
})
