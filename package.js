Package.describe({
  name: 'meteoric:ionicons-sass',
  summary: "Ionic's Ionicons library in SASS and bundled for Meteor.",
  version: '0.1.2',
  git: 'https://github.com/meteoric/ionicons-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('stevezhu:sass@1.3.2');

  api.addFiles('sass_include_paths.json', 'server');

  api.addFiles([
    'ionicons-fonts/ionicons.eot',
    'ionicons-fonts/ionicons.svg',
    'ionicons-fonts/ionicons.ttf',
    'ionicons-fonts/ionicons.woff'
  ], 'client');


  api.addFiles([
    'ionicons-sass/_ionicons-animation.scss',
    'ionicons-sass/_ionicons-font.scss',
    'ionicons-sass/_ionicons-icons.scss',
    'ionicons-sass/_ionicons-variables.scss'
  ], 'client');

  api.addFiles('_ionicons.scss', 'client');
});
