![](http://f.cl.ly/items/391y4708420P0H001k1G/meteoric.png)

# ionicons-sass

[Ionic](http://ionicframework.com/)'s [Ionicons](http://ionicons.com/) library in SASS and bundled for Meteor. Currently up to date with version `2.0.0`.

## Installation

```
meteor add fourseven:scss
meteor add meteoric:ionicons-sass
```

Then in your app's `.scss` file:

```
@import '.meteor/local/build/programs/server/assets/packages/meteoric_ionicons-sass/ionicons';
```

**NOTE:**
Due to a current limitation of the Meteor packaging system, the above path may not exist the first time you run your Meteor app after installing this package. This will cause an error saying the file to import was not found. This may also occur if you run meteor reset. Restarting your app should fix this problem. See [meteor/meteor#2606](https://github.com/meteor/meteor/issues/2606) and [meteor/meteor#2796](https://github.com/meteor/meteor/issues/2796) for more info.

## Docs

See the official [Ionicons](http://ionicons.com/) site for usage instructions.
