const express = require("express");
const router = express.Router();

const getAllUsers = require("../contollers/getAllUsers");

router.route("/").get(getAllUsers);

module.exports = router;
