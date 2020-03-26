const { getAjvInstance } = require('../shared/util')

const VALID_CUSTOMER_ID = 'affd9ea8-d9b5-430c-a861-546f7143cf5d'
const INVALID_CUSTOMER_ID = '123123'

const SCHEMA_FILE = './getCustomerPhoneNumbers-request-schema.json'

function getSchema () {
  return require(SCHEMA_FILE)
}

describe('getCustomerPhoneNumbers()', () => {
  it('should PASS a valid request', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      customerId: VALID_CUSTOMER_ID
    }

    const valid = validate(request)
    expect(valid).toEqual(true)
  })

  it('should FAIL an invalid request - missing customer ID parameter', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = { }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual("should have required property 'customerId'")
  })

  it('should FAIL a valid request with additional parameters', () => {
    const schema = require('./activatePhoneNumber-request-schema.json')
    const validate = (getAjvInstance()).compile(schema)
    const request = {
      customerId: VALID_CUSTOMER_ID,
      extraPropery: '123123123'
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual('should NOT have additional properties')
  })

  it('should FAIL a request with an invalid customer ID', () => {
    const schema = require('./activatePhoneNumber-request-schema.json')
    const validate = (getAjvInstance()).compile(schema)
    const request = {
      customerId: INVALID_CUSTOMER_ID
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual('should match pattern "^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$"')
  })
})
