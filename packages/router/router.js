// 404 page configuration
Router.notFound = {
  action: function() {
    Atomic.setTitle("404 Not Found!");
    Layout.render("DefaultLayout",  {
      view: "404View"
    })
  }
}
