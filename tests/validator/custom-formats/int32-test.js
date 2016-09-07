const expect = require('chai').expect

const int32 = require('../../../lib/validator/custom-formats/int32')

describe('validator/custom-formats/int32', () => {
  it('returns false when value is undefined', () => {
    expect(int32(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(int32(null)).to.be.equal(false)
  })

  it('returns false when value is a non-numeric string', () => {
    expect(int32('test')).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(int32({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(int32([])).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(int32(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(int32(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(int32(Infinity)).to.be.equal(false)
  })

  it('returns true when value is an integer', () => {
    expect(int32(0)).to.be.equal(true)
  })

  it('returns false when value < -2147483648', () => {
    expect(int32(-2147483649)).to.be.equal(false)
    expect(int32('-2147483649')).to.be.equal(false)
  })

  it('returns true when -2147483648 <= value <= 2147483647', () => {
    expect(int32(-2147483648)).to.be.equal(true)
    expect(int32('-2147483648')).to.be.equal(true)
    expect(int32(2147483647)).to.be.equal(true)
    expect(int32('2147483647')).to.be.equal(true)
  })

  it('returns false when value > 2147483647', () => {
    expect(int32(2147483648)).to.be.equal(false)
    expect(int32('2147483648')).to.be.equal(false)
  })
})
