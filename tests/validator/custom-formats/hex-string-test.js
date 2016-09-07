const expect = require('chai').expect

const hexString = require('../../../lib/validator/custom-formats/hex-string')

describe('validator/custom-formats/hex-string', () => {
  it('returns false when value is undefined', () => {
    expect(hexString(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(hexString(null)).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(hexString({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(hexString([])).to.be.equal(false)
  })

  it('returns false when value is an integer', () => {
    expect(hexString(1)).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(hexString(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(hexString(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(hexString(Infinity)).to.be.equal(false)
  })

  it('returns false when value is not valid', () => {
    [
      'a',
      '1',
      'a1:',
      'a1:b',
      'g1'
    ]
      .forEach((value) => {
        expect(hexString(value)).to.be.equal(false)
      })
  })

  it('returns true when value is valid', () => {
    [
      'a1',
      'a1:b2',
      'f1'
    ]
      .forEach((value) => {
        expect(hexString(value)).to.be.equal(true)
      })
  })
})
