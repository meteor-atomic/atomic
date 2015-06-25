/**
 * Extend the settings with client side functions
 */
_.extend(Settings, {
	/**
	 * Fetch a setting
	 */
	get: function(key) {
		var key = Settings.collection.findOne({key: key}) || undefined;
		return key ? key.value : undefined;
	},

  /**
   * Returnt eh Subscripion handler for Settings
   */
  subscription: function() {
    return Meteor.subscribe("settings");
  }
});
