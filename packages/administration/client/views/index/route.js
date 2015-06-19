/**
 * Index Route
 */
AdminRouter.route("/", {
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
    	console.log("hello from admin");
    }
})