const { getAjvInstance } = require('../shared/util')

const VALID_CUSTOMER_ID = 'affd9ea8-d9b5-430c-a861-546f7143cf5d'
const INVALID_CUSTOMER_ID = '123123'
const VALID_PHONE_NUMBER = '0444000000'
const INVALID_PHONE_NUMBER = '123123'

const SCHEMA_FILE = './activatePhoneNumber-request-schema.json'

function getSchema () {
  return require(SCHEMA_FILE)
}

describe('getAllPhoneNumbers()', () => {
  it('should PASS a valid request', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      customerId: VALID_CUSTOMER_ID,
      phoneNumber: VALID_PHONE_NUMBER
    }

    const valid = validate(request)
    expect(valid).toEqual(true)
  })

  it('should FAIL an invalid request - missing phone number parameter', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      customerId: VALID_CUSTOMER_ID
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual("should have required property 'phoneNumber'")
  })

  it('should FAIL an invalid request - missing customer ID parameter', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      phoneNumber: VALID_PHONE_NUMBER
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual("should have required property 'customerId'")
  })

  it('should FAIL a valid request with additional parameters', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      customerId: VALID_CUSTOMER_ID,
      phoneNumber: VALID_PHONE_NUMBER,
      extraPropery: '123123123'
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual('should NOT have additional properties')
  })

  it('should FAIL a request with an invalid phone number', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      customerId: VALID_CUSTOMER_ID,
      phoneNumber: INVALID_PHONE_NUMBER
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual('should match pattern "^[0-9]{10}$"')
  })

  it('should FAIL a request with an invalid customer ID', () => {
    const validate = (getAjvInstance()).compile(getSchema())
    const request = {
      customerId: INVALID_CUSTOMER_ID,
      phoneNumber: VALID_PHONE_NUMBER
    }

    const valid = validate(request)
    expect(valid).toEqual(false)
    expect(validate.errors[0].message).toEqual('should match pattern "^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$"')
  })
})
