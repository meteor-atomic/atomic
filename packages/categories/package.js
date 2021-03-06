Package.describe({
  name: 'atomic:categories',
  version: '0.5.0',
  summary: 'Category models and utilities',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("underscore");
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");

  // Atomic Core
  api.use("atomic:security");
  api.use("atomic:utilities");

  api.addFiles('namespace.js');
  api.addFiles('common/categories.js',  ['server', 'client']);
  api.addFiles('common/schema.js',      ['server', 'client']);
  api.addFiles('server/categories.js',  ["server"]);
  api.addFiles('server/publish.js',     ["server"]);
  api.addFiles('client/categories.js',  ["client"]);

  api.export("Categories");
});
