const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    trim: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
  },
  emai: {
    type: String,
    required: [true, "Please provide an email"],
    trim: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    trim: true,
    unique: true,
    minlength: 6,
    maxlength: 50,
  },
});
