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

  // As were hooking into account callbacks we also need to use it here
  api.use("accounts-base");
  api.use("alanning:roles@1.2.12");

  // We add our account hooks on the server side to help standardise the
  // account.services, account.profile and account.emails area's
  api.addFiles("server/standardiser.js", ["server"]);

  // Promote the first user to login to administrator
  api.addFiles("server/admin.js", ["server"]);
});
