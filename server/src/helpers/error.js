/* eslint-disable require-jsdoc */
/* eslint-disable max-classes-per-file */

/**
 * @class ApplicationError
 * @description Contains controller methods for each error
 * @exports ApplicationError
 */
class ApplicationError extends Error {
  constructor(error, status) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.status = status;
    this.error = error;
  }
}

/**
 * @class ApplicationError
 * @description Contains controller methods for each error
 * @params {message} Not Found error message
 * @exports NotFoundError
 */
export const NotFoundError = class extends ApplicationError {
  constructor(message) {
    super(message || 'No Record found matching that criteria', 404);
  }
};

export const UserExists = class extends ApplicationError {
  constructor(message) {
    super(message || 'User with that email already exist', 409);
  }
};

export const AuthenticationError = class extends ApplicationError {
  constructor(message) {
    super(message || 'Could not authenticate you', 401);
  }
};

export const AuthorizationError = class extends ApplicationError {
  constructor(message) {
    super(message || 'You are not authorized to perform that action', 403);
  }
};

export const InvalidRequestBodyError = class extends ApplicationError {
  constructor(message) {
    super(message || 'Invalid Request Body', 422);
  }
};

export const TokenNotProvidedError = class extends ApplicationError {
  constructor(message) {
    super(message || 'Auth token missing', 401);
  }
};

export const InvalidToken = class extends ApplicationError {
  constructor(message) {
    super(message || 'Token Invalid', 403);
  }
};

export const SchemaError = class extends Error {
  constructor(error) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.type = 'schema';
    this.error = error;
  }
};
