/**
 * Attach the schema
 */
_.extend(Posts, {

	/**
	 * @todo pass arguments over to Meteor.subscribe
	 */
	subscribe: function() {
		Meteor.subscribe("posts");
	}
});