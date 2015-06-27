Package.describe({
  name: 'atomic:core',
  version: '0.5.0',
  summary: 'Core wrapper package to connect all the modules together',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Installation runner, this will be removed and replaced with
  // atomic:installer which will provide a UI Based installation process.
  api.use("atomic:installation",  ["server"]);

  // XXX I think this will need to be moved to the atomic:client package
  // at some point
  api.use("atomic:rss",           ["server"]);

  // Load the client application
  api.use("atomic:client");

  // This can be enabled or disabled by commenting this line out
  // admin is 100% detachable.
  api.use("atomic:admin");
});
