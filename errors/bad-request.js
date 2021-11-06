const CustomAPIError = require('./custom-error')
//const {StatusCode} = require('')

class BadRequest extends Error {
    constructor(message) {
      super(message)
      this.statusCode = 400
    }
  }
  
  module.exports = BadRequest
  