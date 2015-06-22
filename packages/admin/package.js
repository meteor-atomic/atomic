Package.describe({
  name: 'blog:admin',
  version: '0.5.0',
  summary: 'Blog adminsitration area',
  git: 'https://github.com/robertpitt/meteorpress',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  /**
   * Require meteor packages
   */
  api.use("templating",                       "client");
  api.use("mquandalle:jade@0.4.3",            "client");

  /**
   * Require internal packages
   */
  api.use("blog:router",                      "client");
  api.use("blog:settings",                    "client");
  api.use("blog:i18n",                        "client");
  api.use("blog:posts",                       "client");
  api.use("blog:categories",                  "client");
  api.use("blog:users",                       "client");
  api.use("blog:editor",                      "client");

  // Temporary until it's seperated and wrapped like
  // the Router is.
  api.use("meteorhacks:flow-layout",          "client");

  // Extend the base router
  api.addFiles("router.js",                   "client");

  // Index route
  api.addFiles("index.js",                    "client");

  // Layout
  api.addFiles("layouts/default.jade",        "client");
  api.addFiles("layouts/default.css",         "client");

  // Sections
  api.addFiles("sections/sidebar/sidebar.jade", "client");
  api.addFiles("sections/sidebar/sidebar.js",   "client");

  // Dashbaord
  api.addFiles("dashboard/dashboard.jade",    "client");
  api.addFiles("dashboard/route.js",          "client");

  // Posts
  api.addFiles("posts/posts.jade",            "client");
  api.addFiles("posts/posts.js",              "client");
  api.addFiles("posts/route.js",              "client");
  api.addFiles("posts/create/create.jade",    "client");
  api.addFiles("posts/create/create.js",      "client");
  api.addFiles("posts/create/route.js",       "client");
});
