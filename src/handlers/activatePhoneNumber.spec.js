const { handler } = require('./activatePhoneNumber')

describe('activatePhoneNumber()', () => {
  it('should return 200 status for a valid request', async () => {
    const event = require('../../data/events/activatePhoneNumber-valid.json')
    const context = {}

    const response = await handler(event, context)
    expect(response.statusCode).toStrictEqual(200)
  })

  it('should return 400 status for an invalid request - missing customer ID', async () => {
    const event = require('../../data/events/activatePhoneNumber-invalid-no-customer-id.json')
    const context = {}

    const response = await handler(event, context)
    expect(response.statusCode).toStrictEqual(400)
    expect(JSON.parse(response.body)).toStrictEqual({
      message: 'Invalid request'
    })
  })

  it('should return 400 status for an invalid request - invalid JSON body', async () => {
    const event = require('../../data/events/activatePhoneNumber-invalid-no-json-body.json')
    const context = {}

    const response = await handler(event, context)
    expect(response.statusCode).toStrictEqual(400)
    expect(JSON.parse(response.body)).toStrictEqual({
      message: 'Invalid request'
    })
  })
})
