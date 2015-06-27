Package.describe({
  name: 'atomic:i18n',
  version: '0.5.0',
  summary: 'i18n package, wraps and configures TAPI18n',
  git: 'https://github.com/meteor-atomic/atomic'
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

  api.addFiles('namespace.js');
  api.export("I18n");
});
