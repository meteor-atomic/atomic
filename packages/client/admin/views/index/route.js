/**
 * Index Route
 */
AdminRouter.route("/", {
    /**
     * Index route id
     * @type {String}
     */
    name: "admin.index",

    /**
     * When the route is activated
     * @param  {Object} params      Router Parameters
     * @param  {Object} queryParams Query Parameters
     * @return {void}
     */
    action: function(params, queryParams) {
        FlowLayout.render("AdminDefaultLayout", {
            view: "AdminIndexView"
        });
    }
})