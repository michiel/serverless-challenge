const { getRandomListOfPhoneNumbers, getRandomNumber } = require('./data-generation')

class PhoneNumberService {
  async getCustomer (id) {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  async getAllPhoneNumbers () {
    return new Promise((resolve, reject) => {
      const phoneNumbers = getRandomListOfPhoneNumbers(250)
      console.info(`metrics-report:phone-numbers:items-retrieved:${phoneNumbers.length}`)
      resolve(phoneNumbers)
    })
  }

  async getCustomerPhoneNumbers (id) {
    return new Promise((resolve, reject) => {
      const phoneNumbers = getRandomListOfPhoneNumbers(getRandomNumber(0, 5))
      console.info(`metrics-report:phone-numbers:items-retrieved:${phoneNumbers.length}`)
      resolve(phoneNumbers)
    })
  }

  async activatePhoneNumber (customerId, phoneNumber) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}

class CustomerService {
  async getCustomer (id) {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }
}

module.exports = {
  PhoneNumberService,
  CustomerService
}
