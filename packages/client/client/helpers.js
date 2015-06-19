/**
 * {{log <arguments>}}
 * Outputs all arguments to browser console.
 * @param  {Mixed} one or more space separated arguments to log
 */
Template.registerHelper('log', function() {
  console.log.apply(console, arguments);
});