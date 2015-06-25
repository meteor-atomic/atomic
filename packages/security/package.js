Package.describe({
  name: 'atomic:security',
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

  api.imply("ongoworks:security@1.2.0");
  api.use("ongoworks:security@1.2.0");

  // Custom rules for the security package
  api.addFiles('namespace.js',    ["server"]);
  api.addFiles('server/rules.js', ["server"]);
});
