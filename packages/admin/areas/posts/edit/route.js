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
    this.register("admin.post", Meteor.subscribe("admin.post", params.id));
  },

  /**
   */
  action: function(params, queryParams) {
    // Set the page title
    Atomic.setTitle("Edit " + Atomic.seperator + " Posts");

    // Render the view
    Layout.render("DefaultAdminLayout", {
      view: "AdminPostEditView",
      id: params.id
    });
  }
})
