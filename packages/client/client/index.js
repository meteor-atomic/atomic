Router.route('/', {
    /**
     * Index route id
     * @type {String}
     */
    name: "index",

    /**
     * When the route is activated
     * @param  {Object} params      Router Parameters
     * @param  {Object} queryParams Query Parameters
     * @return {void}
     */
    action: function(params, queryParams) {
      Router.go("blog");
    }
});
