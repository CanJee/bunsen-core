const expect = require('chai').expect

const int64 = require('../../../lib/validator/custom-formats/int64')

describe('validator/custom-formats/int64', () => {
  it('returns false when value is undefined', () => {
    expect(int64(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(int64(null)).to.be.equal(false)
  })

  it('returns false when value is a non-numeric string', () => {
    expect(int64('test')).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(int64({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(int64([])).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(int64(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(int64(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(int64(Infinity)).to.be.equal(false)
  })

  it('returns true when value is an integer', () => {
    expect(int64(0)).to.be.equal(true)
  })
})
