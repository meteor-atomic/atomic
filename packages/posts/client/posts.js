/**
 * Attach the schema
 */
_.extend(Posts, {

	/**
	 * @todo pass arguments over to Meteor.subscribe
	 */
	subscription: function(options) {
		return Meteor.subscribe("posts", options);
	}
});
