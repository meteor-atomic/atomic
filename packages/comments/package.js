Package.describe({
  name: 'atomic:comments',
  version: '0.5.0',
  summary: 'Comments model',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Core
  api.use("underscore");

  // Schema
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");

  // Add the namespace
  api.addFiles('namespace.js',        ['client', 'server']);

  // Common
  api.addFiles('common/comments.js',  ['client', 'server']);
  api.addFiles('common/schema.js',    ['client', 'server']);

  // Server
  api.addFiles('server/comments.js',  ['server']);
  api.addFiles('server/publish.js',   ['server']);

  // Export
  api.export("Comments");
});
