Package.describe({
  name: 'atomic:media',
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
  api.addFiles('collections/common.js', ['client', 'server']);

  // Publications
  api.addFiles('publications/media.js', ['server']);

  // Client side
  api.addFiles('client.js',             ['client']);

  // Server side
  api.addFiles('server.js',             ['server']);

  api.export("Media");
});
