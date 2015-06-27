Package.describe({
  name: 'atomic:rss',
  version: '0.5.0',
  summary: 'RSS Feeds',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("webapp",             "server");
  api.use("underscore",         "server");
  api.use("routepolicy",        "server");
  api.use("xmlbuilder",         "server");

  // Require router used for generating links
  api.use("atomic:router",      "server");

  // Require models
  api.use("atomic:posts",       "server");
  api.use("atomic:users",       "server");

  // Expose the core server
  api.addFiles('server/rss.js', "server");
});
