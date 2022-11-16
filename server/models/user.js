require("dotenv").config();
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    minlength: [3, "Username too short, minimun characters(3)"],
    maxlength: [20, "Username too long, maximum characters(20)"],
    unique: true,
    required: [true, "Username must be provided."],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide email",
    ],
    minlength: 3,
    unique: true,
    required: [true, "Email must be provided."],
  },
  password: {
    type: String,
    minlength: 5,
    required: [true, "Please enter a password."],
  },
  confirmPassword: {
    type: String,
    minlength: 5,
    required: [true, "Please confirm password."],
  },
});

// plugins
userSchema.plugin(uniqueValidator);

// mognoose middleware
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// mongose schema methods
userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
userSchema.methods.comparePassword = async function (givenPassword) {
  const isMatch = await bcrypt.compare(givenPassword, this.password);
  return isMatch;
};
module.exports = mongoose.model("User", userSchema);
