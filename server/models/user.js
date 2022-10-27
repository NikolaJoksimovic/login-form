const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username must be provided.."],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provifr email",
    ],
    unique: true,
    required: [true, "Email must be provided.."],
    minlength: 3,
  },
  password: {
    type: String,
    minlength: 5,
    required: [true, "Please enter a password"],
  },
});

module.exports = mongoose.model("User", userSchema);
