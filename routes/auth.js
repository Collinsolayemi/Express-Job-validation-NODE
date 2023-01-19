const express = require("express");
const router = express.Router();

const { logIn, register } = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").get(logIn);

module.exports = router;
