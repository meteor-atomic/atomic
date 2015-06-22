Package.describe({
  name: 'blog:client',
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

  // Internal
  api.use("blog:accounts");
  api.use("blog:categories");
  api.use("blog:posts");
  api.use("blog:i18n", ["client", "server"]);

  // Templating
  api.use("templating", "client");
  api.use("mquandalle:jade@0.4.3");
  api.use("chuangbo:marked@0.3.2");

  // Routing
  api.use("blog:router");
  api.use("arillo:flow-router-helpers");

  // UI
  api.use("semantic:ui-css@1.12.3", "client");
  api.use("utilities:avatar@0.7.11");
  api.use("mrt:moment");

  /**
   * Load the i18n language file(s)
   */
  api.addFiles("en.i18n.json",  "client");

  /**
   * Load the client application.
   */
  api.addFiles("client/head.html",                          "client");
  api.addFiles("client/404.jade",                           "client");
  api.addFiles("client/helpers.js",                         "client");
  api.addFiles("client/layouts/default.jade",               "client");
  api.addFiles("client/layouts/default.css",                "client");
  api.addFiles("client/sections/header/header.jade",        "client");
  api.addFiles("client/sections/header/header.js",          "client");
  api.addFiles("client/components/comments/comments.jade",  "client");
  api.addFiles("client/components/breadcrumbs/breadcrumbs.jade", "client");
  api.addFiles("client/views/blog/blog.jade",               "client");
  api.addFiles("client/views/blog/blog.js",                 "client");
  api.addFiles("client/views/blog_post/blog_post.jade",     "client");
  api.addFiles("client/views/blog_post/blog_post.js",       "client");
});
