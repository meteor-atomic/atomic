Package.describe({
  name: 'atomic:router',
  version: '0.5.0',
  summary: 'Client base router, this is the common setup for all frontend packages that require routes.',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Core + Subscriptions
  api.use("tracker");
  api.use("atomic:atomic");
  api.use("atomic:posts");
  api.use("atomic:categories");
  api.use("atomic:settings");

  // Load core routing libraries
  api.use("meteorhacks:flow-router@1.15.0",   "client");
  api.use("meteorhacks:flow-layout@1.4.0",    "client");

  api.imply("arillo:flow-router-helpers",     "client");
  api.imply("meteorhacks:flow-router@1.15.0", "client");
  api.imply("meteorhacks:flow-layout@1.4.0",  "client");

  // Routing declarations
  api.addFiles("namespace.js",                "client");
  api.addFiles("router.js",                   "client");

  // Add the extensions
  api.addFiles("extensions/permissions.js",   "client");

  // Export the rotuer namespace.
  api.export("Router");
});
