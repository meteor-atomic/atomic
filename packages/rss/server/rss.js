/**
 * Declare the route as a network, this tell's Meteor *NOT* to serve
 * the index.html used to bootstrap an application.
 */
RoutePolicy.declare('/rss', 'network');

/**
 * Intercept the web requests
 * @param  {Request} req    Request Object
 * @param  {Response} res   Response Ojbect
 * @param  {Function} next  Next handler
 */
WebApp.connectHandlers.use(function(req, res, next) {

	/**
	 * Validate that the index of /rss
	 */
	if(req._parsedUrl.pathname.indexOf("/rss") !== 0) {
		return next();
	}

  /**
   * Create an XML Element
   * @see http://cyber.law.harvard.edu/rss/rss.html
   */
  var xml = XmlBuilder.create('rss', {'@version': "2.0"});

  /**
   * Create RSS Feed
   * @var {XmlBuilder}
   */
  var channel = xml.ele('channel');

  // Required elements
  channel.ele("title",        "Website Title");
  channel.ele("link",         Meteor.absoluteUrl());
  channel.ele("description",  "Website Description");

  // Optional elements
  channel.ele("language",       "en-us");
  channel.ele("lastBuildDate",  (new Date()).toString());
  channel.ele("generator",      "Atomic 1.0");
  channel.ele("docs",           "http://cyber.law.harvard.edu/rss/rss.html");
  channel.ele("feed_url",       Meteor.absoluteUrl("rss"));

  // Process the post items
  _.each(Posts.published().fetch(), function(post){

    // Create item entity
    var item = channel.ele("item");

    // Generate the item scope for this post
    item.ele("guid",        post._id);
    item.ele("title",       post.title);
    item.ele("link",        Meteor.absoluteUrl("?" + post._id)); // What has it come too?
    item.ele("description", "");

    // XXX do better here!!
    if(post.creator) {
      var profile           = Users.getProfile(post.creator) || {};
      item.ele("author",    profile.name);
    }
    // item.ele("category",    "");
    // item.ele("comments",    "");
    item.ele("pubDate",     post.createdAt.toString());
  });

	/**
	 * Send the xml back to the client
	 */
  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.end(xml.end({pretty: true}));
});
