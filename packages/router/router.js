/**
 * Extend flow router to normalise the naming convention
 */
Router = FlowRouter;

// Set hte root to the body element
FlowLayout.setRoot('body');

/**
 * Global subscriptions
 */
Router.subscriptions = function() {
  this.register("settings", Settings.subscription());
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
