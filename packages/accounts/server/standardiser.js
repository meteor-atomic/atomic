
/**
 * Account standardiser
 * @todo Add other services when required.
 */
Accounts.onCreateUser(function(options, user){

  /**
   * Service key
   * @type {String}
   */
  var serviceKey = _.keys(user.services)[0];

  /**
   * The service
   */
  var service = user.services[serviceKey];

  /**
   * Extract the target service
   */
  switch(serviceKey) {
    case 'google':
      options.emails            = [{address: service.email, verified: service.verified_email}];
      options.profile.name      = service.name;
      options.profile.firstName = service.given_name;
      options.profile.lastName  = service.family_name;
      options.profile.avatar    = service.picture;
      options.profile.gender    = service.gender ? service.gender.toLowerCase() : "unknown";
      options.locale            = service.locale;
    break;
  }

  /**
   * Return the user object
   */
  return _.extend(user, options);
})
