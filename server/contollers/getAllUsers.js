const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.status(200).json({ allUsers });
};
module.exports = getAllUsers;
