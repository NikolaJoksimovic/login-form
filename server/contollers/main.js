const User = require("../models/user");

const getAllUsers = async (req, res) => {
  res.send("get all users..");
};
const createAcc = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  const tempUser = { username, email, password };
  console.log(tempUser);
  const user = await User.create({ ...tempUser });
  res.status(200).json({ username: "joksa" });
};
module.exports = { getAllUsers, createAcc };
