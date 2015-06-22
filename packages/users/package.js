Package.describe({
  name: 'blog:users',
  version: '0.1.0',
  summary: 'Users models and utilities',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");
  api.use("underscore");
  api.use("check");

  api.addFiles('users.js',        ["server", "client"]);
  api.addFiles('users_server.js', ["server"]);
  api.addFiles('users_client.js', ["client"]);
  api.export("Users");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('blog:users');
});
