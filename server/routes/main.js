const express = require("express");
const router = express.Router();

const { getAllUsers, createAcc } = require("../contollers/main");

router.route("/").get(getAllUsers);
router.route("/register").post(createAcc);

module.exports = router;
