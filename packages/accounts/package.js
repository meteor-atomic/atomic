Package.describe({
  name: 'blog:accounts',
  version: '0.5.0',
  summary: 'Accounts wrapper package',
  git: 'https://github.com/robertpitt/meteorpress'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  // Currently we are only looking at surporting google
  // in the future we will open this up to twitter
  api.imply("accounts-google");

  // We use roles to manage permissions
  api.imply("alanning:roles@1.2.12");
});
