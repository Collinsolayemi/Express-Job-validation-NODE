const express = require("express");
const router = express.Router();

const { logIn, register } = require("../controllers/auth");

router.post("/register", register);
router.route("/login", logIn);

module.exports = router;
