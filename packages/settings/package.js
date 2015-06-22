Package.describe({
  name: 'blog:settings',
  version: '0.1.0',
  summary: 'Settings Package',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("service-configuration", "server");
  api.use("underscore", ["server", "client"]);
  api.use("mongo", "server");

  /**
   * Add the
   */
  api.addFiles('settings.js', ["server", "client"]);
  api.addFiles('settings_server.js', ["server"]);
  api.addFiles('settings_client.js', ["client"]);

  /**
   * Export the settings
   */
  api.export("Settings");
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('blog:settings');
//   api.addFiles('settings-tests.js');
// });
