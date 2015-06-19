Package.describe({
  name: 'blog:rss',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({"rss" : "1.1.1"});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("webapp", "server");
  api.use("routepolicy", "server");
  api.use("blog:posts", "server");

  api.addFiles('rss.js', "server");
});