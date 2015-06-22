Package.describe({
  name: 'blog:categories',
  version: '0.1.0',
  summary: 'Category models and utilities',
  git: 'https://github.com/robertpitt/meteorpress'
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
