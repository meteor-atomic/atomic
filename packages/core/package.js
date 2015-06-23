Package.describe({
  name: 'atomic:core',
  version: '0.5.0',
  summary: 'Core wrapper package to connect all the modules together',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Packages that only core depends on, these are usually
  // system and backend only packages
  api.use("atomic:installation",  ["server"]);
  api.use("atomic:rss",           ["server"]);

  // We need to imply accounts outside the package scope
  // so that frontend accounts is available.
  api.imply("atomic:accounts",      ["server", "client"]);

  // Load the client application
  api.use("atomic:client");

  // This can be enabled or disabled by commenting this line out
  // admin is 100% detachable.
  api.use("atomic:admin");
});
