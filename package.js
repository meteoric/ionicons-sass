Package.describe({
  name: 'meteoric:ionicons-sass',
  summary: "Ionic's Ionicons library in SASS and bundled for Meteor.",
  version: '0.1.5',
  git: 'https://github.com/meteoric/ionicons-sass'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use("fourseven:scss@1.0.0", ["server"]);
  api.imply("fourseven:scss", ["server"]);

  api.addFiles([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff'
  ], 'client');


  api.addFiles([
    'stylesheets/_ionicons-animation.scss',
    'stylesheets/_ionicons-font.scss',
    'stylesheets/_ionicons-icons.scss',
    'stylesheets/_ionicons-variables.scss'
  ], 'server');

  api.addFiles('_ionicons.scss', 'server');
});
