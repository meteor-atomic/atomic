Package.describe({
  name: 'blog:users',
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
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");
  api.use("underscore");

  api.addFiles('users.js',        ["server", "client"]);
  api.addFiles('users_server.js', ["server"]);
  api.addFiles('users_client.js', ["client"]);
  api.export("Users");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('blog:users');
});
