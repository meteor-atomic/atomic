Package.describe({
  name: 'atomic:users',
  version: '0.5.0',
  summary: 'Users models and utilities',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");
  api.use("underscore");
  api.use("check");

  api.addFiles('namespace.js',      ["server", "client"]);
  api.addFiles('common/users.js',   ["server", "client"]);
  api.addFiles('server/users.js',   ["server"]);
  api.addFiles('server/publish.js', ["server"]);
  api.addFiles('client/users.js',   ["client"]);
  api.export("Users");
});
