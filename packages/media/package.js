Package.describe({
  name: 'atomic:media',
  version: '0.5.0',
  summary: 'A package to configure and manage media storage and functionality.',
  git: 'https://github.com/meteor-atomic/atomic',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Extend CollectionFS
  api.use("underscore");
  api.use("atomic:security");

  api.imply("cfs:standard-packages@0.5.9");
  api.imply("cfs:filesystem@0.1.2");
  api.use('cfs:graphicsmagick');

  api.use("cfs:standard-packages@0.5.9");
  api.use("cfs:filesystem@0.1.2");

  // Setup & common
  api.addFiles('common.js',             ['client', 'server']);

  // Transforms
  api.addFiles('transforms/server.js',  ['server']);

  // Stores
  api.addFiles('stores/server.js',      ['server']);
  api.addFiles('stores/client.js',      ['client']);

  // Collections
  api.addFiles('collections/client.js', ['client']);
  api.addFiles('collections/server.js', ['server']);

  // Publications
  api.addFiles('publications/media.js', ['server']);

  // Client side
  api.addFiles('client.js',             ['client']);

  // Server side
  api.addFiles('server.js',             ['server']);

  api.export("Media");
});
