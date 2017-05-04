var deepFreeze = require('../../deep-freeze')

/**
 * Simple bunsen model with conditions
 */

module.exports = deepFreeze({
  definitions: {
    tags: {
      type: 'object',
      properties: {
        tag: {
          type: 'number',
          default: 20,
          multipleOf: 1.0,
          minimum: 0,
          maximum: 4094,
          conditions: [{
            if: [{
              '../tagType': {equals: 'single-tagged'}
            }, {
              '../tagType': {equals: 'double-tagged'}
            }]
          }]
        },
        tag2: {
          type: 'number',
          default: 3000,
          multipleOf: 1.0,
          minimum: 0,
          maximum: 4094,
          conditions: [{
            if: [{
              '../tagType': {equals: 'double-tagged'}
            }]
          }]
        }
      }
    }
  },
  type: 'object',
  properties: {
    tagType: {
      type: 'string',
      enum: ['untagged', 'single-tagged', 'double-tagged', 'foo-tagged']
    },
    myTags: {
      type: 'object',
      '$ref': '#/definitions/tags'
    }
  }
})
