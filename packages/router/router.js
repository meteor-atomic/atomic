// Set hte root to the body element
FlowLayout.setRoot('body');

/**
 * Global subscriptions
 */
Router.subscriptions = function() {}

/**
 * 404 page configuration
 * @type {Object}
 */
Router.notFound = {
  action: function() {
    Atomic.setTitle("404 Not Found!");
    FlowLayout.render("DefaultLayout",  {
      view: "404View"
    })
  }
}
