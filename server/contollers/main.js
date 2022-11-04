const User = require("../models/user");
const { BadRequestErorr, AuthenticationError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const getHomePage = async (req, res) => {
  res.json({ serverStatus: "Server is up" });
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(StatusCodes.OK).json({ users: allUsers });
};

// REGISTER
const createAcc = async (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    throw new AuthenticationError("Passwords do not match..");
  }
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      userId: user._id,
      username: user.username,
    },
    token,
  });
};

// LOGIN
const loginAcc = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestErorr("Invalid credentials(username)..");
  }
  const user = await User.findOne({ username });
  const correctPassword = await user.comparePassword(password);
  if (!correctPassword) {
    throw new BadRequestErorr("Invalid credentials(password)..");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      userId: user._id,
      username: user.username,
    },
    token,
  });
};

// DASHBOARD ACCESS
const getUserDashboard = async (req, res) => {
  res.status(StatusCodes.OK).json({ ...req.body });
};

module.exports = {
  getHomePage,
  getAllUsers,
  createAcc,
  loginAcc,
  getUserDashboard,
};
