Package.describe({
  name: 'blog:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Packages that only core depends on, these are usually
  // system and backend only packages
  api.use("blog:installation",  ["server"]);
  api.use("blog:rss",           ["server"]);

  // We need to imply accounts outside the package scope
  // so that frontend accounts is available.
  api.imply("blog:accounts",      ["server", "client"]);

  // Load the client application
  api.use("blog:client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('blog:core');
});
