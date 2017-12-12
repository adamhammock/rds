import httpStatus from 'http-status';
import expressValidation from 'express-validation';
// import APIError from '../utils/APIError';
import config from '../../config/vars';

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export function  handler(err, req, res) {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (config.env !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
  res.end();
};
exports.handler = handler;

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export function converter(err, req, res, next) {
  let convertedError = err;

  /* if (err instanceof expressValidation.ValidationError) {
    convertedError = new APIError({
      message: 'Error de Validation',
      errors: err.errors,
      status: err.status,
      stack: err.stack,
    });
  } else if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  } */

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
export function notFound(req, res, next) {
  /* const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
  }); */
  const err = {};
  return handler(err, req, res);
};
