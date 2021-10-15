const CustomAPIError = require("./custom-error");
const BadRequest = require("./bad-request");
const unAuthenticatedError = require("./unAuthenticated");

module.exports = {
  CustomAPIError,
  BadRequest,
  unAuthenticatedError,
};
