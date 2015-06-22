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
    function(){ if(!Meteor.userId()) return Router.go("index");}
  ]
});
