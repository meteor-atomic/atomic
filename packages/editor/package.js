Package.describe({
  name: 'atomic:editor',
  version: '0.5.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Add the vendor libraries
  api.addFiles("vendor/lepture/editor/editor.css",  "client");
  api.addFiles("vendor/lepture/editor/editor.js",   "client");
  api.addFiles("vendor/lepture/editor/marked.js",   "client");

  api.export("Editor");
});
