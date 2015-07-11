Package.describe({
  name: 'atomic:layout',
  version: '0.5.0',
  summary: 'Extends FlowLayout',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Core
  api.use("meteorhacks:flow-layout@1.4.0", "client");

  // Files
  api.addFiles('namespace.js', "client");

  // Export the layout
  api.export("Layout")
});
