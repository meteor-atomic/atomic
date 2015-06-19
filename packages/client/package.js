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
  api.use("meteorhacks:flow-router@1.15.0", "client");
  api.use("meteorhacks:flow-layout", "client");
  api.use("arillo:flow-router-helpers", "client");

  // UI
  api.use("semantic:ui-css@1.12.3", "client");
  api.use("utilities:avatar@0.7.11");
  api.use("mrt:moment");

  var UIFiles = [
    "en.i18n.json",
    "client/head.html",
    "client/helpers.js",

    // Layouts
    "client/layouts/default.jade",
    "client/layouts/default.css",

    // Sections
    "client/sections/header/header.jade",
    "client/sections/header/header.js",

    // Components
    "client/components/comments/comments.jade",
    "client/components/breadcrumbs/breadcrumbs.jade",

    // Index
    "client/views/index/route.js",

    // Blog
    "client/views/blog/blog.jade",
    "client/views/blog/blog.js",
    "client/views/blog/route.js",

    "client/views/blog_post/blog_post.jade",
    "client/views/blog_post/blog_post.js",
    "client/views/blog_post/route.js"
  ];

  UIFiles.forEach(function(file){
    api.addFiles(file, "client");
  });
});
