/**
 * Load the RSS Lib
 */
var RSS = Npm.require('rss');

// Declare network routes
RoutePolicy.declare('/rss', 'network');

/**
 * Intercept the web
 */
WebApp.connectHandlers.use(function(req, res, next) {
	/**
	 * Validate that the index of /rss
	 */
	if(req._parsedUrl.pathname.indexOf("/rss") !== 0) {
		return next();
	}

	/**
	 * Create a new RSS Handler
	 */
	var feed = new RSS({
		title: "to implement",
		description: "to implement",
		feed_url: "/feed/",
		site: "/"
	});

	/**
	 * Loop the latests post into the feed
	 */
	for(post in Posts.latest()) {
		feed.item({
			title: post.title
		});
	}

	/**
	 * Send the xml back to the client
	 */
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.end(feed.xml({indent: true}));
});