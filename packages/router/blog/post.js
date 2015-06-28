Router.route('/blog/:id/:slug?', {
    /**
     * Index route id
     * @type {String}
     */
    name: "blog.post",

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
      this.register('post', Posts.subscription({
        query: {_id : params.id}
      }));
    },

    /**
     * When the route is activated
     * @param  {Object} params      Router Parameters
     * @param  {Object} queryParams Query Parameters
     * @return {void}
     */
    action: function(params, queryParams) {
      FlowLayout.render("DefaultLayout", {
          view: "BlogPostView",
          id: params.id
      });
    }
});
