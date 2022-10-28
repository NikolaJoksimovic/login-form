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

const loginAcc = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestErorr("Invalid credentials(username)..");
  }
  const user = await User.findOne({ username });
  const correctPassword = await user.comparePassword(password);
  console.log(correctPassword);
  if (!correctPassword) {
    throw new BadRequestErorr("Invalid credentials(password)..");
  }
  const token = user.createJWT();
  res.json({ user: { username: username }, token });
};
module.exports = { serverIsUp, getAllUsers, createAcc, loginAcc };
