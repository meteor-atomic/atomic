Package.describe({
  name: 'blog:router',
  version: '0.1.0',
  summary: 'Frontend router.',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Router subscriptions
  api.use("blog:posts");
  api.use("blog:categories");
  api.use("blog:settings");

  // Core router
  api.use("meteorhacks:flow-router@1.15.0", "client");
  api.use("meteorhacks:flow-layout", "client");

  // Routing declarations
  api.addFiles("router.js", "client");
  api.addFiles("index.js", "client");
  api.addFiles("blog/index.js", "client");
  api.addFiles("blog/post.js", "client");

  api.export("Router");
});
