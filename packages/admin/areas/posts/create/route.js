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
   */
  action: function(params, queryParams) {
    /**
     * Create a new draft and then transfer to edit mode
     */
    Router.go("admin.posts.edit", {id: Posts.draft()});
  }
})
