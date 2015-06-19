Package.describe({
  name: 'blog:i18n',
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

  // We extend this
  api.use("underscore");

  /**
   * XXX In order to extend the Tapi18n api we have to call
   *     .use() to bring it into scope, we also have to imply
   *     the package due to the some error with the helper functions
   *     not being applied glabally.
   *
   *     this is obviusly a little dirty but we should take a deaper
   *     look into the issue and wrap the package properly.
   */
  api.use("tap:i18n@1.5.0");
  api.imply("tap:i18n@1.5.0");

  api.addFiles('i18n.js');
  api.export("I18n");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('blog:i18n');
  api.addFiles('i18n-tests.js');
});
