/**
 * This file will promote the very first account to administrator
 */
Accounts.onLogin(function(auth){

  /**
   * How many accounts are in the system
   */
  if(Meteor.users.find().count() === 1) {
    if(Roles.userIsInRole(auth.user, 'admin') === false) {
      Roles.addUsersToRoles(auth.user, ['admin']);
    }
  }
})
