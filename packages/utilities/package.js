Package.describe({
  name: 'atomic:utilities',
  version: '0.5.0',
  summary: 'Utilities package',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("underscore");

  api.addFiles('namespace.js');
  api.addFiles('common/utilities.js', ['server', 'client']);

  api.export("Utilities");
});
