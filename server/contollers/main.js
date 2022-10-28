const User = require("../models/user");
const { BadRequestErorr, AuthenticationError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const serverIsUp = async (req, res) => {
  res.send("Server is up");
};

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(StatusCodes.OK).json({ users: allUsers });
};
const createAcc = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    throw new AuthenticationError("Passwords do not match..");
  }
  const tempUser = { username, email, password };
  const user = await User.create({ ...tempUser });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      userId: user._id,
      username: user.username,
      password: user.password,
    },
    token,
  });
};
module.exports = { serverIsUp, getAllUsers, createAcc };
