const Ajv = require('ajv')

function getAjvInstance () {
  const ajv = new Ajv({
    schemaId: 'id',
    logger: {
      log: console.log.bind(console),
      warn: () => {},
      error: console.error.bind(console)
    }
  })
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))
  return ajv
}

module.exports = {
  getAjvInstance
}
