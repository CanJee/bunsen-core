const expect = require('chai').expect

const uint16 = require('../../../lib/validator/custom-formats/uint16')

describe('validator/custom-formats/uint16', () => {
  it('returns false when value is undefined', () => {
    expect(uint16(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(uint16(null)).to.be.equal(false)
  })

  it('returns false when value is a string', () => {
    expect(uint16('test')).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(uint16({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(uint16([])).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(uint16(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(uint16(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(uint16(Infinity)).to.be.equal(false)
  })

  it('returns false when value = -1', () => {
    expect(uint16(-1)).to.be.equal(false)
    expect(uint16('-1')).to.be.equal(false)
  })

  it('returns true when 0 <= value <= 65535', () => {
    expect(uint16(0)).to.be.equal(true)
    expect(uint16('0')).to.be.equal(true)
    expect(uint16(65535)).to.be.equal(true)
    expect(uint16('65535')).to.be.equal(true)
  })

  it('returns false when value = 65536', () => {
    expect(uint16(65536)).to.be.equal(false)
    expect(uint16('65536')).to.be.equal(false)
  })
})
