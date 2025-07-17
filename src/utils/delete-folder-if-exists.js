const { rimraf } = require('rimraf');

//  Helper to delete a folder if it exists.
async function deleteFolderIfExists(folder) {
  return rimraf(folder, {});
}

module.exports = deleteFolderIfExists;
