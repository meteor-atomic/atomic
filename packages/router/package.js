Package.describe({
  name: 'atomic:router',
  version: '0.5.0',
  summary: 'Frontend router.',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Router subscriptions
  api.use("atomic:posts");
  api.use("atomic:categories");
  api.use("atomic:settings");

  // Core router
  api.use("meteorhacks:flow-router@1.15.0", "client");
  api.use("meteorhacks:flow-layout@1.4.0", "client");

  // Routing declarations
  api.addFiles("router.js", "client");
  api.addFiles("index.js", "client");
  api.addFiles("blog/index.js", "client");
  api.addFiles("blog/post.js", "client");

  api.export("Router");
});
