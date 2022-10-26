const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be provided.."],
  },
  email: {
    type: String,
    required: [true, "Email must be provided.."],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
});

module.exports = mongoose.model("User", userSchema);
