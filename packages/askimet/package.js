Package.describe({
  name: 'atomic:askimet',
  version: '0.5.0',
  summary: 'Askimet library for meteor',
  git: 'https://github.com/meteor-atomic/atomic'
});

// Package setup
Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Core
  api.use("underscore");
  api.use("http");

  // Namespace
  api.addFiles('namespace.js');

  // Common
  api.addFiles("common/askimet.js", ['client', 'server']);

  // Server
  api.addFiles("server/askimet.js", ['server']);
  api.addFiles("server/methods.js", ['server']);

  // Exports
  api.export("Askimet");
});
