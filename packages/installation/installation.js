/**
 *
 */
if(Settings.get("configured")) {
	return;
}

/**
 * Configure Google Service
 */
ServiceConfiguration.configurations.remove({
  service 	: "google"
});

ServiceConfiguration.configurations.insert({
  service 	: "google",
  clientId 	: "682289903569-k0amirfmn81mo4fihaf6l8av05btregh.apps.googleusercontent.com",
  secret 	: "xJLqWKVmbfEWFM4hL0VFxyyM"
});

/**
 * Add the first category
 */
var category = Categories.create("Uncategorised", "Default category");

/**
 * Add some posts
 */
for (var i = 10; i >= 0; i--) {
	Posts.create({
	  title: 'Meteor 0.4.1: Sending email and Node 0.8',
	  summary: "We are hard at work polishing up Meteor Accounts, our full-featured auth system that supports login with Facebook and Google, or with secure passwords. Many Meteor developers are already using it on our pre-release [`auth`](https://github.com/meteor/meteor/tree/auth) branch and contributing code: we've merged pull requests for Twitter and Weibo login services, with more on the way.",
	  categories: [category],
    tags: ["Meteor", "Accounts", "Email"],
    published: true,
	  content: [
	    "We are hard at work polishing up Meteor Accounts, our full-featured auth system that supports login with Facebook and Google, or with secure passwords. Many Meteor developers are already using it on our pre-release [`auth`](https://github.com/meteor/meteor/tree/auth) branch and contributing code: we've merged pull requests for Twitter and Weibo login services, with more on the way. See the [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-Started-with-Auth) page on our wiki and the email traffic on [the meteor-core list](https://groups.google.com/forum/?fromgroups#!forum/meteor-core) if you want to get an early look.",
	    "One result of that effort is Meteor 0.4.1's new [`email` smart package](http://docs.meteor.com/#email) for sending email messages, which Meteor Accounts uses to send password recovery and welcome emails. When running locally, emails prints to the console for ease of debugging. In production, `Email.send()` will work with any standard SMTP server.",
	    "But there's more than just an API. We've partnered with [Rackspace's Mailgun team](http://mailgun.com) so that every app deployed with `$ meteor deploy` can send email right away, without any annoying configuration process. These automatic accounts are capped at 200 messages a day, but of course you're not tied to them. You can use any SMTP server (your own box, a paid Mailgun account, or anything else) just by setting the `$MAIL_URL` environment variables, whether you're using our deploy servers or running your own bundles.",
	    "To update your installation, just run `$ meteor update`. If you haven't tried Meteor yet and you're on Linux or a Mac, you can get started with `$ curl https://install.meteor.com | sh` inside a terminal window.",
	    "Meteor 0.4.1 includes some additional changes. We've upgraded [Node.js](http://nodejs.org) from [0.6 to 0.8](https://github.com/joyent/node/wiki/API-changes-between-v0.6-and-v0.8), the latest stable release line of the JavaScript engine that Meteor's server-side components run on. We've made our API more consistent with JavaScript standards by converting the last few old APIs from inch_worm spellings to camelCase (though the old names continue to work for now). And we incorporated a slew of other improvements and bug fixes from the Meteor community; see [History.md](https://github.com/meteor/meteor/blob/master/History.md) for full details."
	  ].join('\n\n')
	});
};

/**
 * Mark the isntallation as complete
 */
Settings.set("configured", true, true);
