Package.describe({
  name: 'atomic:rss',
  version: '0.5.0',
  summary: 'RSS Feeds',
  git: 'https://github.com/robertpitt/meteorpress'
});

Npm.depends({"rss" : "1.1.1"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("webapp",             "server");
  api.use("underscore",         "server");
  api.use("routepolicy",        "server");
  api.use("atomic:posts",       "server");
  api.addFiles('server/rss.js', "server");
});
