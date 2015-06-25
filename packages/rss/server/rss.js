/**
 * Load the RSS Lib
 */
var RSS = Npm.require('rss');

/**
 * Declare network routes
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
   * Create the header options
   */
  var options = {};

  /**
   * Set the options
   */
  options.title       = "Website Title";
  options.description = "Website Description";
  options.generator   = "Atomic RSS";
  options.feed_url    = Meteor.absoluteUrl("rss");
  options.site_url    = Meteor.absoluteUrl();
  options.image_url   = null/*site image asset*/;
  options.author      = null/*Site Author*/;
  options.categories  = null/*Category listing*/;
  options.pubDate     = null/*Published date*/;
  options.copyright   = null/*Site Copyright*/;
  options.language    = null/*Site language from i18n*/;
  options.ttl         = 8600/*RSS ttl from settings*/;

  /**
   * RSS Feed generator
   * @type {RSS}
   */
	var rss = new RSS(options);

	/**
   * Apply each post to the feed
   */
  _.each(Posts.all().fetch(), function(post){
    console.log(post);
    rss.item({
      guid:             post._id,
      title:            post.title || 'Untitled',
      description:      post.summary || '',

      // We should have a permilink helper that can transform an
      // entity into a permilink
      url:              Meteor.absoluteUrl("?post=" + post._id),

      // Need to transform these from _id's to values
      categories:       post.categories || [],
      author:           post.author,

      // date:             options.date,
      // lat:              options.lat,
      // long:             options.long,
      // enclosure:        options.enclosure || false,
      // custom_elements:  options.custom_elements || []
    });
  });

	/**
	 * Send the xml back to the client
	 */
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.end(rss.xml({indent: true}));
});
