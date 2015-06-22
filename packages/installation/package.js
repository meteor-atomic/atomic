Package.describe({
  name: 'blog:installation',
  version: '0.1.0',
  summary: 'Development only, kicks in after mteor reset to populate some data.',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use("service-configuration");
  api.use("blog:settings");
  api.use("blog:posts");
  api.use("blog:categories");

  api.addFiles('installation.js', ["server"]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('blog:installation');
});
