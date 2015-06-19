/**
 * Configure Javscript plugins
 */
Template.HeaderSection.rendered = function() {
	/**
	 * Configure Dropdowns
	 */
	this.$(".dropdown").dropdown();
};

/**
 * Bind events
 */
Template.HeaderSection.events({
	"click a[login]" : function() {
		Meteor.loginWithGoogle();
	},

	"click a[logout]" : function() {
		Meteor.logout();
	}
});