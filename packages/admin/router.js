/**
 * Adminsitration Router
 */
AdminRouter = Router.group({
  // @todo Make this configurable
  prefix: "/admin",

  /**
   * Enter Trigger
   * @type {Array}
   */
  triggersEnter: [
    function() {
      if(!Meteor.userId() || !Roles.userIsInRole(Meteor.user(), ['admin'])) {
        return Router.go("index");
      }
    }
  ]
});
