function getRandomPhoneNumber () {
  return Math.floor(Math.random() * 100000000000)
}

function getRandomNumber (min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomListOfPhoneNumbers (n = 10) {
  const list = []
  for (let i = 0; i < n; i++) {
    list.push(getRandomPhoneNumber())
  }
  return list
}

module.exports = {
  getRandomListOfPhoneNumbers,
  getRandomNumber
}
