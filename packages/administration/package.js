Package.describe({
  name: 'blog:administration',
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

  // Templating
  api.use("templating", "client");
  api.use("mquandalle:jade@0.4.3");

  // Routing
  api.use("meteorhacks:flow-router@1.15.0", "client");
  api.use("meteorhacks:flow-layout", "client");
  api.use("arillo:flow-router-helpers", "client");

  var UIFiles = [
    // Router and core files
    "client/router.js",
    "client/head.jade",

    "client/layouts/default.jade",

    // Index
    "client/views/index/index.jade",
    "client/views/index/route.js"
  ];

  UIFiles.forEach(function(file){
    api.addFiles(file, "client");
  });
});