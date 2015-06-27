Package.describe({
  name: 'atomic:client',
  version: '0.5.0',
  summary: 'Client side application',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Internal
  api.use("atomic:accounts");
  api.use("atomic:categories");
  api.use("atomic:posts");
  api.use("atomic:router");
  api.use("atomic:i18n");
  api.use("atomic:notify");
  api.use("atomic:accounts");

  // Templating
  api.use("templating", "client");
  api.use("mquandalle:jade@0.4.3");
  api.use("chuangbo:marked@0.3.2");

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
