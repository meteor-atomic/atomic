/**
 * Attach the schema
 */
_.extend(Users, {

  /**
   * Grant role to user
   * @param  {String|Collection}  userId Target account
   * @param  {Array}              roles  Array of roles to grant
   * @param  {String}             group  Optional group
   * @return {Boolean}            true of roles were added.
   */
  grant: function(user, roles, group) {
    check(user, Match.OneOf(String, Object))
    check(Roles, Array);

    return Roles.addUsersToRoles(user, roles, group || Roles.GLOBAL_GROUP);
  },

  /**
   * Revoke role from user
   * @param  {String|Collection}  userId Target account
   * @param  {Array}              roles  Array of roles to revoke
   * @param  {String}             group  Optional group
   * @return {Boolean}            true of roles were added.
   */
  revoke: function(user, roles, group) {
    check(user, Match.OneOf(String, Object))
    check(Roles, Array);

    return Roles.removeUsersFromRoles(user, roles, group || Roles.GLOBAL_GROUP);
  },

  /**
   * Get a user's roles
   * @param  {String} user  User ID
   * @param  {String} group  Optional group
   * @return {Array}        Array of roles.
   */
  roles: function(user, group) {
    check(user, Match.OneOf(String, Object))

    return Roles.getRolesForUser(user, group || Roles.GLOBAL_GROUP);
  }
});
