function ok (data) {
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

function clientError (data) {
  return {
    statusCode: 400,
    body: JSON.stringify(data)
  }
}

function serverError (data) {
  return {
    statusCode: 500,
    body: JSON.stringify(data)
  }
}

module.exports = {
  ok,
  clientError,
  serverError
}
