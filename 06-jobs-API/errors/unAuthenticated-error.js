const CustomAPIError = require("./custom-API-error");
const { StatusCodes } = require("http-status-codes");

class UnAuthenticationError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthenticationError;
