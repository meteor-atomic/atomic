Package.describe({
  name: 'atomic:settings',
  version: '0.5.0',
  summary: 'Settings Package',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // System packages
  api.use("service-configuration",    ["server"]);
  api.use("underscore",               ["server", "client"]);
  api.use("mongo",                    ["server"]);

  // Data Security
  api.use("atomic:security",            ["server"]);

  // Settings files
  api.addFiles('namespace.js',        ["server", "client"]);
  api.addFiles('common/settings.js',  ["server", "client"]);
  api.addFiles('server/settings.js',  ["server"]);
  api.addFiles('client/settings.js',  ["client"]);

  /**
   * Export the settings
   */
  api.export("Settings");
});
