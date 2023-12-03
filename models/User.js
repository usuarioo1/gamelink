const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "nombre no ingresado",
    trim: true,
    lowercase: true,
    minLenght: 4,
  },
  mail: {
    type: String,
    trim: true,
    required: true,
    //agrgegar regex
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
