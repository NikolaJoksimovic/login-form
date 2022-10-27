const CustomAPIError = require("../errors/CustomAPIError");
const { StatusCodes } = require("http-status-codes");

class AuthenticationError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_ACCEPTABLE;
  }
}

module.exports = AuthenticationError;
