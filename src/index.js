const generate = require('./generate');
const labelImage = require('./label/label-image');
const androidManifestIcons = require('./android/AndroidManifest.icons.json');
const IconMagickIconSet = require('./ios/IconMagick.iconset.Contents.template.json');

module.exports = {
  labelImage,
  generate,
  templates: {
    'AndroidManifest.icons': androidManifestIcons,
    'IconMagick.iconset': IconMagickIconSet,
  },
};
