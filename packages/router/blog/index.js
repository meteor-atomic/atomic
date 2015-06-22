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
        this.register('posts',      Posts.subscribe());
        this.register('categories', Categories.subscribe());
    },

    /**
     * When the route is activated
     * @param  {Object} params      Router Parameters
     * @param  {Object} queryParams Query Parameters
     * @return {void}
     */
    action: function(params, queryParams) {
        FlowLayout.render("DefaultLayout", {view: "BlogView"});
    }
});
