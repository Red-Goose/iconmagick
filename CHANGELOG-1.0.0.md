# Changelog - Version 1.0.0

## Major Updates for Node.js 18+ and App Store Requirements

### Breaking Changes
- **Node.js Version**: Updated minimum required Node.js version from `>=10` to `>=18`
- **Dependencies**: Updated all dependencies to their latest versions

### New Features
- **iOS Icons**: Added support for latest iOS icon sizes including:
  - Apple Watch icons (Series 4, 5, 6, 7, 8, 9)
  - macOS icons for Apple Silicon and Intel Macs
  - iOS 16+ icon requirements
  
- **Android Icons**: Enhanced Android icon support with:
  - Android 13+ (API 33+) adaptive icon support with monochrome icons
  - Vector drawable support for API 24+
  - Updated adaptive icon templates

### Technical Improvements
- **CircleCI**: Updated to use modern Node.js versions (18, 20, 22) in CI pipeline
- **ESLint**: Updated to latest version with improved configuration
- **Commander.js**: Updated to latest version with destructured imports
- **Mkdirp**: Updated to latest version with promise-based API
- **Rimraf**: Updated to latest version with promise-based API

### App Store Compliance
- Added comprehensive Apple Watch icon sizes for all watch sizes
- Added macOS icon support for latest requirements
- Enhanced Android adaptive icon support with monochrome icons for Android 13+
- Updated icon templates to match latest platform requirements

### Development Experience
- Improved error handling and debugging
- Better TypeScript compatibility
- Enhanced test coverage
- Modernized build and deployment pipeline

### Migration Guide
To upgrade from 0.x to 1.0.0:
1. Update Node.js to version 18 or higher
2. Run `npm install` to update dependencies
3. Test icon generation to ensure compatibility
4. Update any custom scripts that depend on old API patterns

This version ensures compatibility with the latest App Store requirements and provides a solid foundation for future updates.
