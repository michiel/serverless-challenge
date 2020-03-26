const { getAjvInstance } = require('../shared/util')
const { ok, clientError, serverError } = require('../shared/response')
const { PhoneNumberService } = require('../shared/persistence')

function isValidRequest (params) {
  const schema = require('./activatePhoneNumber-request-schema.json')
  const validate = (getAjvInstance()).compile(schema)
  return !!validate(params)
}

module.exports.handler = async event => {
  let params
  try {
    params = JSON.parse(event.body)
  } catch (e) {
    return clientError({
      message: 'Invalid request'
    })
  }

  if (!isValidRequest(params)) {
    return clientError({
      message: 'Invalid request'
    })
  }

  try {
    const service = new PhoneNumberService()
    return ok(await service.activatePhoneNumber(params.customerId, params.phoneNumber))
  } catch (e) {
    return serverError({
      message: 'An error has occurred'
    })
  }
}
