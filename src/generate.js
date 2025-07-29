// Handle both chalk v4 (CommonJS) and v5+ (ESM) compatibility
let chalk;
try {
  chalk = require('chalk');
  // If chalk is imported but doesn't have the expected API, wrap it
  if (typeof chalk !== 'function' && (!chalk.green || typeof chalk.green !== 'function')) {
    chalk = chalk.default || chalk;
  }
} catch (error) {
  // Fallback if chalk fails to import
  chalk = {
    green: (text) => text
  };
}
const findIconsetFolders = require('./ios/find-iconset-folders');
const generateIconsetIcons = require('./ios/generate-iconset-icons');
const findAndroidManifests = require('./android/find-android-manifests');
const generateManifestIcons = require('./android/generate-manifest-icons');
const generateManifestAdaptiveIcons = require('./android/generate-manifest-adaptive-icons');
const validateParameters = require('./validate-parameters');
const findLaunchImagesetFolders = require('./ios/find-launch-imageset-folders');
const generateLaunchImagesetIcons = require('./ios/generate-launch-imageset-icons');
const findSplashImagesetFolders = require('./ios/find-splash-imageset-folders');
const generateSplashImagesetIcons = require('./ios/generate-splash-imageset-icons');

module.exports = async function generate(parameters) {
  //  Validate and coerce the parameters.
  const {
    sourceIcon,
    backgroundIcon,
    foregroundIcon,
    searchRoot,
    platforms,
    adaptiveIcons,
  } = validateParameters(parameters || {});

  //  Set up the results object.
  const results = {
    iconsets: [],
    manifests: [],
    adaptiveIconManifests: [],
  };

  const iconSets = await findIconsetFolders(searchRoot);
  await Promise.all(iconSets.map(async (iconset) => {
    if (!platforms.includes('ios')) return null;
    console.log(`Found iOS iconset: ${iconset}...`);

    const { icons } = await generateIconsetIcons(sourceIcon, iconset);
    results.iconsets.push({ iconset, icons });
    icons.forEach((icon) => {
      console.log(`    ${chalk.green('✓')}  Generated Appicon ${icon}`);
    });
    console.log(`    ${chalk.green('✓')}  Updated Contents.json`);

    return null;
  }));
  const launchImageSets = await findLaunchImagesetFolders(searchRoot);
  await Promise.all(launchImageSets.map(async (imageset) => {
    if (!platforms.includes('ios')) return null;
    console.log(`Found iOS launch imageset: ${imageset}...`);

    const { icons } = await generateLaunchImagesetIcons(sourceIcon, imageset);
    results.iconsets.push({ imageset, icons });
    icons.forEach((icon) => {
      console.log(`    ${chalk.green('✓')}  Generated Launchimage ${icon}`);
    });
    console.log(`    ${chalk.green('✓')}  Updated Contents.json`);

    return null;
  }));
  const splashImageSets = await findSplashImagesetFolders(searchRoot);
  await Promise.all(splashImageSets.map(async (imageset) => {
    if (!platforms.includes('ios')) return null;
    console.log(`Found iOS splash imageset: ${imageset}...`);

    const { icons } = await generateSplashImagesetIcons(sourceIcon, imageset);
    results.iconsets.push({ imageset, icons });
    icons.forEach((icon) => {
      console.log(`    ${chalk.green('✓')}  Generated splashimage ${icon}`);
    });
    console.log(`    ${chalk.green('✓')}  Updated Contents.json`);

    return null;
  }));

  const manifests = await findAndroidManifests(searchRoot);
  await Promise.all(manifests.map(async (manifest) => {
    if (!platforms.includes('android')) return null;
    console.log(`Found Android Manifest: ${manifest}...`);

    const manResult = await generateManifestIcons(sourceIcon, manifest);
    results.manifests.push({ manifest, icons: manResult.icons });
    manResult.icons.forEach((icon) => {
      console.log(`    ${chalk.green('✓')}  Generated icon ${icon}`);
    });

    if (adaptiveIcons) {
      const atvRes = await generateManifestAdaptiveIcons(backgroundIcon, foregroundIcon, manifest);
      results.adaptiveIconManifests.push({ manifest, icons: atvRes.icons });
      atvRes.icons.forEach((icon) => {
        console.log(`    ${chalk.green('✓')}  Generated adaptive icon ${icon}`);
      });
    }

    return null;
  }));
  return results;
};
