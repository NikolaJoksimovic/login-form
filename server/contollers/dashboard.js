const User = require("../models/user");
const { BadRequestErorr, AuthenticationError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

// DASHBOARD ACCESS
const getUserDashboard = async (req, res) => {
  res.status(StatusCodes.OK).json({ ...req.user });
};

module.exports = getUserDashboard;
