const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  // console.log(typeof err)
  // console.log(err.constructor.name)
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again', innerMessage: err.message })
}

module.exports = errorHandlerMiddleware
