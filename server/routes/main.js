const express = require("express");
const router = express.Router();

const {
  serverIsUp,
  getAllUsers,
  createAcc,
  loginAcc,
} = require("../contollers/main");

router.route("/").get(serverIsUp);
router.route("/home").get(getAllUsers);
router.route("/register").post(createAcc);
router.route("/login").post(loginAcc);

module.exports = router;
