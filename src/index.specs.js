const { expect } = require('chai');
const index = require('./index');

describe('index', () => {
  it('should expose the module to be required in another project', () => {
    expect(index.labelImage).to.be.a('function');
    expect(index.generate).to.be.a('function');
    expect(index.templates).to.be.an('object')
      .and.to.have.all.keys(['AndroidManifest.icons', 'IconMagick.iconset']);
  });
});
