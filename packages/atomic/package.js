Package.describe({
  name: 'atomic:atomic',
  version: '0.5.0',
  summary: 'Core helpers for both server and client',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Core
  api.use('tracker');
  api.use("templating");
  api.use("underscore");
  api.use('reactive-var');
  api.use('reactive-dict');

  // Declare the namespace
  api.addFiles('namespace.js',              ["client", "server"]);

  // Client side operations
  api.addFiles('client/atomic.js',          ["client"]);
  api.addFiles("client/helpers.js",         ["client"]);

  // Add the trackers
  api.addFiles("client/trackers/title.js",  ["client"])

  // Export
  api.export("Atomic");
});
