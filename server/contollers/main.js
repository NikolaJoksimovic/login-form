const User = require("../models/user");
const { BadRequestErorr } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  res.send("get all users..");
};
const createAcc = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const tempUser = { username, email, password };
  console.log(tempUser);
  const user = await User.create({ ...tempUser });
  console.log(user);
  if (!user) {
    throw new BadRequestErorr(
      "Something went wrong with creating your account.."
    );
  }
  res.status(200).json({ username: "joksa" });
};
module.exports = { getAllUsers, createAcc };
