const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
    ],
  },
  password: {
    type: String,
    match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm],
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generadorDeToken = function () {
  const payload = {
    id: this._id,
    name: this.name,
    password: this.password, //eliminar pass de la funcion, solo es de prueba
  };
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 900000 });
  return token;
};

const User = mongoose.model("users", userSchema);

module.exports = User;
