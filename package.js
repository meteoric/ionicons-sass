Package.describe({
  name: 'meteoric:ionicons-sass',
  summary: "Ionic's Ionicons library in SASS and bundled for Meteor.",
  version: '0.1.0',
  git: 'https://github.com/meteoric/ionicons-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('stevezhu:sass@1.3.2');
  api.addFiles('sass_include_paths.json', 'server');

  api.addFiles('ionicons-fonts/ionicons.eot', 'client');
  api.addFiles('ionicons-fonts/ionicons.svg', 'client');
  api.addFiles('ionicons-fonts/ionicons.ttf', 'client');
  api.addFiles('ionicons-fonts/ionicons.woff', 'client');
});
