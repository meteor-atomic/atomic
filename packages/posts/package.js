Package.describe({
  name: 'atomic:posts',
  version: '0.5.0',
  summary: 'Atmoic posts api, this is the model used to read/write/update and delete posts',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Meteor Core
  api.use("underscore");

  // Internal
  api.use("atomic:accounts");
  api.use("atomic:utilities");
  api.use("atomic:categories");
  api.use("atomic:security");

  // Data based packages
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");
  api.use("chuangbo:marked@0.3.2");

  api.addFiles('namespace.js',          ['server', 'client']);
  api.addFiles('common/posts.js',       ["server", "client"]);
  api.addFiles('client/posts.js',       ["client"]);
  api.addFiles('server/posts.js',       ["server"]);
  api.addFiles('server/publication.js', ["server"]);
  api.export("Posts");
});
