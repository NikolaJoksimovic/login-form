const express = require("express");
const router = express.Router();

// main controller
const {
  getHomePage,
  getAllUsers,
  createAcc,
  loginAcc,
  getUserDashboard,
} = require("../contollers/main");

router.route("/").get(getHomePage);
router.route("/users").get(getAllUsers);
router.route("/register").post(createAcc);
router.route("/login").post(loginAcc);
router.route("/dashboard/:id").get(getUserDashboard);

module.exports = router;
