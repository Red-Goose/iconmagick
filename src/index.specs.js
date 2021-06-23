const { expect } = require('chai');
const iconMagick = require('..');

describe('index', () => {
  it('should expose the module to be required in another project', () => {
    expect(iconMagick.labelImage).to.be.a('function');
    expect(iconMagick.generate).to.be.a('function');
    expect(iconMagick.templates).to.be.an('object')
      .and.to.have.all.keys(['AndroidManifest.icons', 'IconMagick.iconset']);
  });
});
