const User = require("../models/user");
const { BadRequestErorr } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  res.send("get all users..");
};
const createAcc = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    // Authentication error..
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
module.exports = { getAllUsers, createAcc };
