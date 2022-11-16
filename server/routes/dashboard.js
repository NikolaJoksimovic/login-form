const express = require("express");
const router = express.Router();

const getUserDashboard = require("../contollers/dashboard");
router.route("/").get(getUserDashboard);

module.exports = router;
