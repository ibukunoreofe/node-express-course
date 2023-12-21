const express = require('express');

/**
 *
 * @param {Error} err - The error object.
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 * @param {function} next - The next middleware function in the Express router.
 * @returns {Promise<*>}
 */
const errorHandlerMiddleware = async (err, req, res, next) => {
  return res.status(500).json({ msg: 'Something went wrong, please try again', detail: err.message })
}

module.exports = errorHandlerMiddleware
