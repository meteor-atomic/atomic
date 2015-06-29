/**
 * Users Helper
 */
Template.AdminUsersView.helpers({
  /**
   * Return all the users in the collection
   */
  users: function() {
    return Users.all();
  },

  /**
   * Return the role(s)
   * @this {User}
   * @return {String}
   */
  role: function() {
    if(!this.roles) {
      return "Member"
    }
    if(this.roles.indexOf('admin') > -1)
      return "Administrator";

    // Return a member string
    return "Member";
  },

  /**
   * Return true if there email is verified
   * @return {Boolean}
   */
  verified: function() {
    var verified = false;
    _.each(this.emails, function(email){
      if(email.verified)
        verified = true;
    })

    return verified;
  },

  services: function() {
    return _.keys(this.services || {});
  },

  serviceIcon: function() {
    return "icon " + this;
  }
})
