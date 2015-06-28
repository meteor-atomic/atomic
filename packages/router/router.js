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
    Atomic.setTile("404 Not Found!");
    FlowLayout.render("DefaultLayout",  {
      view: "404View"
    })
  }
}
