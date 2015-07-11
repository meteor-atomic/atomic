/**
 * Check to see if a subscriptionj is ready.
 * @param  {String} sub  Optional subscription name
 * @return {Boolean}
 */
Template.registerHelper("isSubReady", function(sub) {
  return Router.subsReady(sub || undefined);
});


Template.registerHelper("pathFor", function(path, view) {
  var query, ref;
  if (!path) {
    throw new Error('no path defined');
  }
  if (((ref = path.hash) != null ? ref.route : void 0) != null) {
    view = path;
    path = view.hash.route;
    delete view.hash.route;
  }
  query = view.hash.query ? Router._qs.parse(view.hash.query) : {};
  return Router.path(path, view.hash, query);
})

/**
 * Return a query parameter within a template
 * @param  {String} key Query parameter index
 * @return {String}
 */
Template.registerHelper("queryParam", function(key) {
  return Router.getQueryParam(key);
});
