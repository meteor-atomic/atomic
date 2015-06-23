Package.describe({
  name: 'atomic:installation',
  version: '0.5.0',
  summary: 'Development only, kicks in after mteor reset to populate some data.',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("service-configuration");
  api.use("atomic:settings");
  api.use("atomic:posts");
  api.use("atomic:categories");

  api.addFiles('installation.js', ["server"]);
});
