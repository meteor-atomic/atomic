Package.describe({
  name: 'blog:accounts',
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

  // Currently we are only looking at surporting google
  // in the future we will open this up to twitter
  api.imply("accounts-google");

  // We use roles to manage permissions
  api.imply("alanning:roles@1.2.12");
});