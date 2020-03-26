const { handler } = require('./getAllPhoneNumbers')

describe('getAllPhoneNumbers()', () => {
  it('should return 200 status with a list of numbers', async () => {
    const event = require('../../data/events/getAllPhoneNumbers-basic.json')
    const context = {}

    const response = await handler(event, context)
    expect(response.statusCode).toStrictEqual(200)
    expect(JSON.parse(response.body)).toHaveLength(250)
  })
})
