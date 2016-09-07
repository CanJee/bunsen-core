const expect = require('chai').expect

const bgpAs = require('../../../lib/validator/custom-formats/bgp-as')

describe('validator/custom-formats/bgp-as', () => {
  it('returns false when value is undefined', () => {
    expect(bgpAs(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(bgpAs(null)).to.be.equal(false)
  })

  it('returns false when value is a string', () => {
    expect(bgpAs('test')).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(bgpAs({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(bgpAs([])).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(bgpAs(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(bgpAs(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(bgpAs(Infinity)).to.be.equal(false)
  })

  it('returns false when value < 0', () => {
    expect(bgpAs(-1)).to.be.equal(false)
    expect(bgpAs('-1')).to.be.equal(false)
  })

  it('returns false when value = 0', () => {
    expect(bgpAs(0)).to.be.equal(false)
    expect(bgpAs('0')).to.be.equal(false)
  })

  it('returns true when 1 <= value <= 65534', () => {
    expect(bgpAs(1)).to.be.equal(true)
    expect(bgpAs('1')).to.be.equal(true)
    expect(bgpAs(65534)).to.be.equal(true)
    expect(bgpAs('65534')).to.be.equal(true)
  })

  it('returns false when value = 65535', () => {
    expect(bgpAs(65535)).to.be.equal(false)
    expect(bgpAs('65535')).to.be.equal(false)
  })

  it('returns true when 65536 <= value <= 4294967294', () => {
    expect(bgpAs(65536)).to.be.equal(true)
    expect(bgpAs('65536')).to.be.equal(true)
    expect(bgpAs(4294967294)).to.be.equal(true)
    expect(bgpAs('4294967294')).to.be.equal(true)
  })

  it('returns false when value = 4294967295', () => {
    expect(bgpAs(4294967295)).to.be.equal(false)
    expect(bgpAs('4294967295')).to.be.equal(false)
  })

  it('returns false when value > 4294967295', () => {
    expect(bgpAs(4294967296)).to.be.equal(false)
    expect(bgpAs('4294967296')).to.be.equal(false)
  })
})
