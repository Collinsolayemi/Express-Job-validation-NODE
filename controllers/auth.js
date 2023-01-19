const { StatusCodes } = require("http-status-codes");
const bcryptjs = require("bcryptjs");
const { BadRequestError } = require("../errors");
const User = require("../models/User");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcryptjs.getSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ message: user });
};

const logIn = async (req, res) => {
  res.send("Login users");
};

module.exports = {
  register,
  logIn,
};

//7 hours 13 min
