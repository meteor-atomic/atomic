Package.describe({
  name: 'atomic:notify',
  version: '0.5.0',
  // Brief, one-line summary of the package.
  summary: 'Display notifications in a notifications bar.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('underscore');
  api.use('templating');

  // Export the files
  api.addFiles('notify.js',     ["client"]);
  api.addFiles('template.html', ["client"]);
  api.addFiles('template.js',   ["client"]);
  api.addFiles('template.css',  ["client"]);

  // Export
  api.export("Notify");
});
