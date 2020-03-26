'use strict'

const { ok, serverError } = require('../shared/response')
const { PhoneNumberService } = require('../shared/persistence')

module.exports.handler = async event => {
  try {
    const service = new PhoneNumberService()
    return ok(await service.getAllPhoneNumbers())
  } catch (e) {
    // TODO: Mock the PhoneNumberService with failures for these lines
    /* istanbul ignore next */
    console.error(`getAllPhoneNumbers - error ${e}`)
    /* istanbul ignore next */
    return serverError({
      message: 'An error has occurred'
    })
  }
}
