/**
 * Subscribe to the settings collection
 */
Meteor.subscribe("settings");

/**
 * Extend the settings with client side functions
 */
_.extend(Settings, {
	/**
	 * Fetch a setting
	 */
	get: function(key) {
		var key = Settings.settings.findOne({key: key}) || undefined;
		return key ? key.value : undefined;
	}
});