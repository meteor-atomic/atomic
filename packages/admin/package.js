Package.describe({
  name: 'atomic:admin',
  version: '0.5.0',
  summary: 'Blog adminsitration area',
  git: 'https://github.com/meteor-atomic/atomic',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  /**
   * Require meteor packages
   */
  api.use("templating",                                 "client");
  api.use("reactive-var",                               "client");
  api.use("reactive-dict",                              "client");

  /**
   * Require internal packages
   */
  api.use("atomic:atomic",                              "client");
  api.use("atomic:router",                              "client");
  api.use("atomic:settings",                            "client");
  api.use("atomic:i18n",                                "client");
  api.use("atomic:editor",                              "client");
  api.use("atomic:utilities",                           "client");
  api.use("atomic:notify",                              "client");
  api.use("atomic:accounts");

  /**
   * Data pacakges
   */
  api.use("atomic:posts",                               ["client", "server"]);
  api.use("atomic:categories",                          ["client", "server"]);
  api.use("atomic:comments",                            ["client", "server"]);
  api.use("atomic:users",                               ["client", "server"]);
  api.use("atomic:media",                               ["client", "server"]);

  /**
   * Custom packages
   */
  api.use("mquandalle:jade@0.4.3",                      "client");

  // Temporary until it's seperated and wrapped like
  // the Router is.
  api.use("meteorhacks:flow-layout",                    "client");

  // Expose the admin publications
  api.addFiles("publications.js",                       "server");

  // Extend the base router
  api.addFiles("router.js",                             "client");

  // Index route
  api.addFiles("index.js",                              "client");

  // Layout
  api.addFiles("layouts/default.jade",                  "client");
  api.addFiles("layouts/default.css",                   "client");

  // Sections
  api.addFiles("sections/sidebar/sidebar.jade",         "client");
  api.addFiles("sections/sidebar/sidebar.js",           "client");

  // Segments
  api.addFiles("segments/tags/tags.jade",               "client");
  api.addFiles("segments/tags/tags.js",                 "client");
  api.addFiles("segments/category_picker/picker.jade",  "client");
  api.addFiles("segments/category_picker/picker.js",    "client");
  api.addFiles("segments/category_creator/creator.jade","client");
  api.addFiles("segments/category_creator/creator.js",  "client");

  // Dashbaord
  api.addFiles("areas/dashboard/dashboard.jade",        "client");
  api.addFiles("areas/dashboard/route.js",              "client");

  // Posts
  api.addFiles("areas/posts/posts.jade",                "client");
  api.addFiles("areas/posts/posts.js",                  "client");
  api.addFiles("areas/posts/route.js",                  "client");
  api.addFiles("areas/posts/create/route.js",           "client");
  api.addFiles("areas/posts/edit/edit.jade",            "client");
  api.addFiles("areas/posts/edit/edit.js",              "client");
  api.addFiles("areas/posts/edit/route.js",             "client");
  api.addFiles("areas/posts/drafts/drafts.jade",        "client");
  api.addFiles("areas/posts/drafts/drafts.js",          "client");
  api.addFiles("areas/posts/drafts/route.js",           "client");

  // Categories
  api.addFiles("areas/categories/categories.jade",      "client");
  api.addFiles("areas/categories/categories.js",        "client");
  api.addFiles("areas/categories/route.js",             "client");

  // Comments
  api.addFiles("areas/comments/comments.jade",          "client");
  api.addFiles("areas/comments/comments.js",            "client");
  api.addFiles("areas/comments/route.js",               "client");

  // Media
  api.addFiles("areas/media/route.js",                  "client");
  api.addFiles("areas/media/media.jade",                "client");
  api.addFiles("areas/media/media.js",                  "client");

  // Users
  api.addFiles("areas/users/users.jade",                "client");
  api.addFiles("areas/users/users.js",                  "client");
  api.addFiles("areas/users/route.js",                  "client");

  // Admin
  api.addFiles("areas/settings/general/general.jade",   "client");
  api.addFiles("areas/settings/general/general.js",     "client");
  api.addFiles("areas/settings/general/route.js",       "client");
});
