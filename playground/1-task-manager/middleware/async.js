const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      // once you use next(error), it will start to look for next middleware that accepts error parameter
      next(error)
    }
  }
}

module.exports = asyncWrapper
