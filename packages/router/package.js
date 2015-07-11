Package.describe({
  name: 'atomic:router',
  version: '0.5.0',
  summary: 'Client base router, this is the common setup for all frontend packages that require routes.',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Meteor Core
  api.use("tracker");
  api.use("templating");

  // Atomic Deps
  api.use("atomic:atomic");
  api.use("atomic:posts");
  api.use("atomic:categories");
  api.use("atomic:settings");
  api.use("atomic:layout");

  // Load core routing libraries
  api.use("meteorhacks:flow-router@1.15.0",   "client");
  api.imply("meteorhacks:flow-router@1.15.0", "client");

  // Routing declarations
  api.addFiles("namespace.js",                "client");
  api.addFiles("router.js",                   "client");

  // Helpers
  api.addFiles("client/helpers.js",           "client");

  // Export the rotuer namespace.
  api.export("Router");
});
