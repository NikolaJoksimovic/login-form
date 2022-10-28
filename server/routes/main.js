const express = require("express");
const router = express.Router();

const { serverIsUp, getAllUsers, createAcc } = require("../contollers/main");

router.route("/").get(serverIsUp);
router.route("/home").get(getAllUsers);
router.route("/register").post(createAcc);

module.exports = router;
