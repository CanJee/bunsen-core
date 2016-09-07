const expect = require('chai').expect

const vlanId = require('../../../lib/validator/custom-formats/vlan-id')

describe('validator/custom-formats/vlan-id', () => {
  it('returns false when value is undefined', () => {
    expect(vlanId(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(vlanId(null)).to.be.equal(false)
  })

  it('returns false when value is a string', () => {
    expect(vlanId('test')).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(vlanId({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(vlanId([])).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(vlanId(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(vlanId(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(vlanId(Infinity)).to.be.equal(false)
  })

  it('returns false when value < 0', () => {
    expect(vlanId(-1)).to.be.equal(false)
    expect(vlanId('-1')).to.be.equal(false)
  })

  it('returns false when value = 0', () => {
    expect(vlanId(0)).to.be.equal(false)
    expect(vlanId('0')).to.be.equal(false)
  })

  it('returns true when 1 <= value <= 4094', () => {
    expect(vlanId(1)).to.be.equal(true)
    expect(vlanId('1')).to.be.equal(true)
    expect(vlanId(4094)).to.be.equal(true)
    expect(vlanId('4094')).to.be.equal(true)
  })

  it('returns false when value > 4094', () => {
    expect(vlanId(4095)).to.be.equal(false)
    expect(vlanId('4095')).to.be.equal(false)
  })
})
