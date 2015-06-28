Package.describe({
  name: 'atomic:accounts',
  version: '0.5.0',
  summary: 'Accounts wrapper package',
  git: 'https://github.com/meteor-atomic/atomic'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // note: we need to imply any external pacakges unless they
  //       are being wrapped and exposed via a controlled api...
  //       as the acocunt packages are synonymous with Accounts api
  //       we let the Accounts and Metoer.loginWith* be the core api.
  api.imply("accounts-base");

  // Currently we are only looking at surporting google
  // in the future we will open this up to twitter
  api.imply("accounts-google");


  // Accounts have the Roles package extension enabled
  // The Roles Package
  api.imply("alanning:roles@1.2.12");
});
