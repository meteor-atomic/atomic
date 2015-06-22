Package.describe({
  name: 'blog:core',
  version: '0.1.0',
  summary: 'Core wrapper package to connect all the modules together',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Packages that only core depends on, these are usually
  // system and backend only packages
  api.use("blog:installation",  ["server"]);
  api.use("blog:rss",           ["server"]);

  // We need to imply accounts outside the package scope
  // so that frontend accounts is available.
  api.imply("blog:accounts",      ["server", "client"]);

  // Load the client application
  api.use("blog:client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('blog:core');
});
