Package.describe({
  name: 'blog:router',
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
