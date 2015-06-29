/**
 * Publish the settings to the client
 */
Meteor.publish("settings", function(){
	return Settings.collection.find({"public": true}, {
		_id: 0, key: 1, value: 1
	});
});

/**
 * Ensure the index
 */
Settings.collection._ensureIndex({"key" : 1}, {unique: true});

/**
 * Extend the settings with client side functions
 */
_.extend(Settings, {
  /**
   * Return all setttings
   */
  all: function(callback) {
    return Settings.collection.find({}, {}, callback)
  },

  /**
   * Return all setttings
   */
  public: function(callback) {
    return Settings.collection.find({public: true}, {}, callback);
  },

	/**
	 * Fetch a setting
	 */
	get: function(key) {
		var key = Settings.collection.findOne({key: key}) || undefined;
		return key ? key.value : undefined;
	},

	/**
	 * Set a value
	 * @param {String} key    Setting identifier
	 * @param {*} value  Setting value
	 * @param {Boolean} public Is this setting public
	 */
	set: function(key, value, public) {
		public = public || false;
		return Settings.collection.upsert({"key": key}, {$set: {"key": key, "value": value, "public": public}});
	}
});

/**
 * Only allow admin to create and update
 */
Settings.collection.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();

/**
 * Add public settings to the client
 */
// __meteor_runtime_config__.__settings = Settings.public();
