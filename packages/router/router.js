/**
 * Extend flow router to normalise the naming convention
 */
Router = FlowRouter;

/**
 * Global subscriptions
 */
Router.subscriptions = function() {
  // this.register(<name>, <subscription>);
}

/**
 * 404 page configuration
 * @type {Object}
 */
Router.notFound = {
  action: function() {
    FlowLayout.render("DefaultLayout",  {
      view: "404View"
    })
  }
}
