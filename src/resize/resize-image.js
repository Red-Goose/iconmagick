const imagemagickCli = require('imagemagick-cli');

//  Takes a source image, resizes to a target path.
module.exports = async function resizeImage(source, target, size) {
  // On Windows, specify magick.exe to avoid conflict with Windows convert.exe
  const convertCmd = process.platform === 'win32' ? 'magick convert' : 'convert';
  return imagemagickCli.exec(`${convertCmd} "${source}" -resize ${size} -strip "${target}"`);
};
