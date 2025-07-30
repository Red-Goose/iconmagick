# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.6](https://github.com/Red-Goose/iconmagick/compare/v2.0.5...v2.0.6) (2025-07-30)


### Bug Fixes

* remove redundant context import in GitHub Actions script ([f2d0134](https://github.com/Red-Goose/iconmagick/commit/f2d0134ed618fe63136a9f0c6d4cf611ab3acbd1))

### [2.0.5](https://github.com/Red-Goose/iconmagick/compare/v2.0.4...v2.0.5) (2025-07-29)


### Bug Fixes

* resolve Windows ImageMagick compare command conflicts ([5babb0d](https://github.com/Red-Goose/iconmagick/commit/5babb0d02b5daa6807a7758a944fc56e91ff7414))

### [2.0.4](https://github.com/Red-Goose/iconmagick/compare/v2.0.3...v2.0.4) (2025-07-29)

### [2.0.3](https://github.com/Red-Goose/iconmagick/compare/v2.0.1...v2.0.3) (2025-07-29)


### Bug Fixes

* add defensive chalk import to handle version compatibility issues ([146e989](https://github.com/Red-Goose/iconmagick/commit/146e9898d814f5dfaa26bf70394b77334a9922e5))
* disable linebreak-style ESLint rule for cross-platform compatibility ([bacc562](https://github.com/Red-Goose/iconmagick/commit/bacc5621e6ce3f6d9ad481d712e03f2003b665fe))
* disable node/shebang ESLint rule for cross-platform compatibility ([0d5ce74](https://github.com/Red-Goose/iconmagick/commit/0d5ce74d5143dfd8c55af347cd9d2e0d3a3f86ba))
* resolve ESLint errors for chalk compatibility changes ([ea0483f](https://github.com/Red-Goose/iconmagick/commit/ea0483f8075329519afb5e6eb96ab309fd3ffe10))
* resolve Windows ImageMagick executable conflicts ([688d8d8](https://github.com/Red-Goose/iconmagick/commit/688d8d88efc9880f01ff859cc95af07deb4b2aac))

### [2.0.1](https://github.com/Red-Goose/iconmagick/compare/v2.0.0...v2.0.1) (2025-07-29)

## 2.0.0 (2025-07-26)


### ⚠ BREAKING CHANGES

* Node.js 18 is no longer supported, minimum version is now Node.js 20

### Features

* drop Node.js 18 support, require Node.js 20+ ([057d0ff](https://github.com/Red-Goose/iconmagick/commit/057d0ffdf9eadffad76359907be4a491e0285f2f))
* Release iconmagick v1.0.0 with Node.js 18+ support and modern CI/CD ([6f2cdc2](https://github.com/Red-Goose/iconmagick/commit/6f2cdc26669f18d10edb1cbc9e71fae710236e9e))


### Bug Fixes

* adjust image similarity thresholds for CI environment compatibility ([acd9f4d](https://github.com/Red-Goose/iconmagick/commit/acd9f4d2e097c89c0e899dce2e16fb96c0405449))
* synchronize package-lock.json with package.json ([8923497](https://github.com/Red-Goose/iconmagick/commit/8923497858ecaf8a02a3d9f107e377b279d41ff1))

### [0.13.2](https://github.com/dwmkerr/app-icon/compare/v0.13.1...v0.13.2) (2020-04-06)

### [0.13.1](https://github.com/dwmkerr/app-icon/compare/v0.13.0...v0.13.1) (2019-11-07)


### Features

* Strip metadata from output images ([c73f735](https://github.com/dwmkerr/app-icon/commit/c73f7355fb680dc7959fd78c9944b13c2ee06527))


### Bug Fixes

* **package:** update commander to version 3.0.0 ([f8ba45d](https://github.com/dwmkerr/app-icon/commit/f8ba45dd15d8838674112c1ebf79e682ed309971))
* **package:** update rimraf to version 3.0.0 ([911ad83](https://github.com/dwmkerr/app-icon/commit/911ad8383f886718112c6f649317abcedf4f64be))

## [0.13.0](https://github.com/dwmkerr/app-icon/compare/v0.12.0...v0.13.0) (2019-07-04)


### Features

* **android:** improved handling of 'build' folder ([07b9715](https://github.com/dwmkerr/app-icon/commit/07b9715)), closes [#109](https://github.com/dwmkerr/app-icon/issues/109)



# [0.12.0](https://github.com/dwmkerr/app-icon/compare/v0.11.1...v0.12.0) (2019-05-04)


### chore

* Refactor code to take advantage of async/await ([326d26f](https://github.com/dwmkerr/app-icon/commit/326d26f))


### BREAKING CHANGES

* Support for Node 6 deprecated, now minimum Node 8



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.11.1](https://github.com/dwmkerr/app-icon/compare/v0.11.0...v0.11.1) (2019-04-26)


### Bug Fixes

* **security:** Update mocha to resolve security vulnerabilities ([9bd8dc3](https://github.com/dwmkerr/app-icon/commit/9bd8dc3))
* **tests:** Update regex for node error messages ([0939dfe](https://github.com/dwmkerr/app-icon/commit/0939dfe))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [0.11.0](https://github.com/dwmkerr/app-icon/compare/v0.10.0...v0.11.0) (2019-04-25)


### Features

* standardise icons ([#90](https://github.com/dwmkerr/app-icon/issues/90)) ([9c65dcf](https://github.com/dwmkerr/app-icon/commit/9c65dcf))
* support adaptive icons for 'generate' ([#86](https://github.com/dwmkerr/app-icon/issues/86)) ([3423491](https://github.com/dwmkerr/app-icon/commit/3423491))
* support adaptive icons for `init` command ([#81](https://github.com/dwmkerr/app-icon/issues/81)) ([c55dc2e](https://github.com/dwmkerr/app-icon/commit/c55dc2e))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [0.10.0](https://github.com/dwmkerr/app-icon/compare/v0.9.0...v0.10.0) (2019-04-22)


### Features

* support for android round icons and ldpi ([0f53c3e](https://github.com/dwmkerr/app-icon/commit/0f53c3e)), closes [#71](https://github.com/dwmkerr/app-icon/issues/71) [#82](https://github.com/dwmkerr/app-icon/issues/82)



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# [0.9.0](https://github.com/dwmkerr/app-icon/compare/v0.8.1...v0.9.0) (2019-04-19)


### Features

* added the 'init' command ([#77](https://github.com/dwmkerr/app-icon/issues/77)) ([3736f84](https://github.com/dwmkerr/app-icon/commit/3736f84))



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.8.1](https://github.com/dwmkerr/app-icon/compare/v0.8.0...v0.8.1) (2019-02-18)


### Bug Fixes

* search root parameter not respected ([94bf332](https://github.com/dwmkerr/app-icon/commit/94bf332)), closes [#50](https://github.com/dwmkerr/app-icon/issues/50)



# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# v0.8.0

- Allow package to be required, thanks [cadesalaberry](https://github.com/cadesalaberry)!

# v0.6.4

- Icons are always produced in the same order, fixes #67.

# v0.6.2

- Added support for the new iOS marketing icon sizes, see [this](https://stackoverflow.com/a/44691659), thanks [sampsasaarela](https://github.com/sampsasaarela)!
# v0.6.1

- Fixed a bug where the source icon was not being passed properly, thanks [SamyPesse](https://github.com/SamyPesse)!

# v0.4.2

- Fixed bug where the -i flag was being ignored, thanks [morcerf](https://github.com/morcerf)!

# v0.2.12

- Added some missing iOS Icon Sizes, thanks [robbiet480](https://github.com/robbiet480).

# v0.2.11

- Fixed some goofy scaling bugs, thanks [raldred](https://github.com/raldred)!

# v0.2.10

- Added xxxhdpi support for very high density phones, thanks [pabloppp](https://github.com/pabloppp)!
