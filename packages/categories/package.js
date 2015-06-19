Package.describe({
  name: 'blog:categories',
  version: '0.0.1',
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
  api.use("underscore");
  api.use("blog:utilities");
  api.use("aldeed:collection2@2.3.3");
  api.use("aldeed:simple-schema");

  api.addFiles('categories.js');
  api.addFiles('categories_server.js', ["server"]);

  api.export("Categories");
});