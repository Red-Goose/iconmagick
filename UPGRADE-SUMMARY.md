# iconmagick 1.0.0 - Upgrade Summary

## Summary

The iconmagick tool has been successfully updated for the latest Node.js and App Store requirements. Here's what was changed:

## Key Updates

### 1. Node.js Version Requirement
- **From**: Node.js >=10
- **To**: Node.js >=18
- Updated in `package.json` engines field
- Updated in README.md documentation

### 2. Dependencies Updated
- **ESLint**: Updated to v8.57.0 with modern configuration
- **Commander.js**: Updated to v11.1.0 with destructured imports
- **Mkdirp**: Updated to v3.0.1 with promise-based API
- **Rimraf**: Updated to v5.0.5 with promise-based API
- **Mocha**: Updated to v10.2.0
- **Chai**: Updated to v4.3.10
- All other dependencies updated to their latest stable versions

### 3. iOS Icon Support Enhanced
Added comprehensive icon support including:
- **Apple Watch Icons**: All sizes for Series 4-9 (24x24, 27.5x27.5, 33x33, etc.)
- **macOS Icons**: Full support for Apple Silicon and Intel Macs (16x16 to 512x512)
- **iOS 16+ Requirements**: Updated icon sizes and requirements
- **Watch App Icons**: App launcher, notification center, and quick look icons

### 4. Android Icon Support Enhanced
- **Android 13+ Support**: Added API 33+ adaptive icon support with monochrome icons
- **Vector Drawable Support**: Added support for API 24+ vector drawables
- **Adaptive Icon Templates**: Updated XML templates for modern Android requirements
- **Removed Invalid Vector Entries**: Fixed JSON configuration issues

### 5. CI/CD Pipeline Modernized
- **CircleCI**: Updated to use Node.js 18, 20, and 22
- **Docker Images**: Updated to use modern cimg/node images
- **Build Process**: Improved build steps with proper dependency installation

### 6. Code Quality Improvements
- **ESLint Configuration**: Updated for ES2022 compatibility
- **Error Handling**: Improved error handling for modern Node.js
- **API Updates**: Fixed deprecated API usage in dependencies

## Breaking Changes

1. **Node.js Version**: Minimum version is now 18 (was 10)
2. **API Changes**: Some internal APIs updated for modern dependencies
3. **Commander.js**: Uses destructured imports (internal change)

## Migration Guide

To upgrade from 0.x to 1.0.0:

1. **Update Node.js**: Ensure you're running Node.js 18 or higher
   ```bash
   node --version  # Should be 18.x or higher
   ```

2. **Update iconmagick**: Install the latest version
   ```bash
   npm install -g iconmagick@1.0.0
   ```

3. **Test**: Run your existing icon generation commands
   ```bash
   iconmagick generate
   ```

4. **Verify**: Check that all icons are generated correctly for your platforms

## New Features Available

1. **Enhanced Apple Watch Support**: All modern Apple Watch sizes supported
2. **macOS Icon Support**: Full macOS icon set generation
3. **Android 13+ Icons**: Adaptive icons with monochrome support
4. **Better Error Messages**: Improved debugging and error reporting

## App Store Compliance

This update ensures your app icons meet the latest requirements for:
- **iOS App Store**: All required sizes including latest iPhone and iPad models
- **Google Play Store**: Adaptive icons with monochrome support for Android 13+
- **Apple Watch App Store**: All watch sizes and roles supported
- **macOS App Store**: Full macOS icon support

## Testing

The tool has been tested with:
- Node.js 18.x, 20.x, and 22.x
- Latest ImageMagick versions
- Modern iOS and Android project structures
- All existing icon generation scenarios

## Support

If you encounter any issues after upgrading:
1. Check that you're using Node.js 18+
2. Verify ImageMagick is installed and accessible
3. Test with the basic `iconmagick generate` command
4. Review the updated documentation in README.md

The tool maintains backward compatibility for all existing commands and options.
