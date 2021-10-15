const CustomAPIError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class unAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    thisl.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = unAuthenticatedError;
