Router.route('/blog', {
    /**
     * Index route id
     * @type {String}
     */
    name: "blog",

    /**
     * Attach route level subscriptions
     * @param  {Object} params      Router Parameters
     * @param  {Object} queryParams Query Parameters
     * @return {void}
     *
     * @todo Pagination
     */
    subscriptions: function(params, queryParams) {
      /**
       * Subsribe to posts
       */
      this.register('posts',      Meteor.subscribe("blog.posts", params));
      this.register('categories', Meteor.subscribe("blog.categories"));
    },

    /**
     * When the route is activated
     * @param  {Object} params      Router Parameters
     * @param  {Object} queryParams Query Parameters
     * @return {void}
     */
    action: function(params, queryParams) {
      Atomic.setTitle("Blog");
      FlowLayout.render("DefaultLayout", {view: "BlogView"});
    }
});
