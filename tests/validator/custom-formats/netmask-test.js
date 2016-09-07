const expect = require('chai').expect

const netmask = require('../../../lib/validator/custom-formats/netmask')

describe('validator/custom-formats/ipv4-address', () => {
  it('returns false when value is undefined', () => {
    expect(netmask(undefined)).to.be.equal(false)
  })

  it('returns false when value is null', () => {
    expect(netmask(null)).to.be.equal(false)
  })

  it('returns false when value is an object', () => {
    expect(netmask({})).to.be.equal(false)
  })

  it('returns false when value is an array', () => {
    expect(netmask([])).to.be.equal(false)
  })

  it('returns false when value is an integer', () => {
    expect(netmask(1)).to.be.equal(false)
  })

  it('returns false when value is a float', () => {
    expect(netmask(0.5)).to.be.equal(false)
  })

  it('returns false when value is NaN', () => {
    expect(netmask(NaN)).to.be.equal(false)
  })

  it('returns false when value is Infinity', () => {
    expect(netmask(Infinity)).to.be.equal(false)
  })

  it('returns false when value does not consist of four octets', () => {
    expect(netmask('100.101.102')).to.be.equal(false)
  })

  it('returns false when octets contain non-numeric characters', () => {
    expect(netmask('100a.101.102.103')).to.be.equal(false)
    expect(netmask('100.101a.102.103')).to.be.equal(false)
    expect(netmask('100.101.102a.103')).to.be.equal(false)
    expect(netmask('100.101.102.103a')).to.be.equal(false)
  })

  it('returns false when octets contain negative numbers', () => {
    expect(netmask('-100.101.102.103')).to.be.equal(false)
    expect(netmask('100.-101.102.103')).to.be.equal(false)
    expect(netmask('100.101.-102.103')).to.be.equal(false)
    expect(netmask('100.101.102.-103')).to.be.equal(false)
  })

  it('returns false when octets contain numbers > 255', () => {
    expect(netmask('256.101.102.103')).to.be.equal(false)
    expect(netmask('100.256.102.103')).to.be.equal(false)
    expect(netmask('100.101.256.103')).to.be.equal(false)
    expect(netmask('100.101.102.256')).to.be.equal(false)
  })

  it('returns false when invalid netmask', () => {
    expect(netmask('127.0.0.1')).to.be.equal(false)
    expect(netmask('255.255.255.144')).to.be.equal(false)
  })

  it('returns true when valid netmask', () => {
    expect(netmask('0.0.0.0')).to.be.equal(true)
    expect(netmask('255.255.255.0')).to.be.equal(true)
    expect(netmask('255.255.255.128')).to.be.equal(true)
    expect(netmask('255.255.255.255')).to.be.equal(true)
  })
})
