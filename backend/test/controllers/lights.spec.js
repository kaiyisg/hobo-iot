const { expect } = require('chai');
const { describe, it } = require('mocha');

const lights = require('../../app/controllers/lights.js');

describe('lights-controller', () => {
  // test uppercase function
  it('should return uppercase', () => {
    expect(lights.uc('hello')).to.equal('HELLO');
  });
});
