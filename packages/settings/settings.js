/**
 * Define setttings object
 */
Settings = {};

/**
 * 
 */
_.extend(Settings, {
	/**
	 * Define the collection
	 *
	 * @todo Add distinct on the key
	 */
	settings: new Meteor.Collection("settings"),

	/**
	 * Placeholder
	 */
	get: function(){
		throw new Meteor.Error("NotImplemented", "get not implemented on " + (Meteor.isServer ? "server." : "client."));
	},

	/**
	 * Placeholder
	 */
	set: function(){
		throw new Meteor.Error("NotImplemented", "set not implemented on " + (Meteor.isServer ? "server." : "client."));
	}
});