Package.describe({
  name: 'atomic:posts',
  version: '0.5.0',
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

  // Meteor Core
  api.use("underscore");

  // Blog
  api.use("atomic:utilities");
  api.use("atomic:categories");
  api.use("atomic:security");

  // Data based packages
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");
  api.use("chuangbo:marked@0.3.2");

  api.addFiles('posts.js',              ["server", "client"]);
  api.addFiles('posts_server.js',       ["server"]);
  api.addFiles('posts_publication.js',  ["server"]);
  api.addFiles('posts_client.js',       ["client"]);
  api.export("Posts");
});
