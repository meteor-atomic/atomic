Package.describe({
  version: '0.1.0',
  summary: 'Frontend router.',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Router subscriptions
  api.use("blog:posts");
  api.use("blog:categories");

  // Core router
  // api.imply("meteorhacks:flow-router@1.15.0", "client");
  api.use("meteorhacks:flow-router@1.15.0", "client");
  api.use("meteorhacks:flow-layout", "client");

  // Routing declarations
  api.addFiles("router.js", "client");
  api.addFiles("blog/index.js", "client");
  api.addFiles("blog/blog.js", "client");
  api.addFiles("blog/blog_post.js", "client");

  api.export("Router");
});
