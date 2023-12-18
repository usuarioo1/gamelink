const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require(`crypto`);

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
    match:
      [/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm],
    //[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm], //este era el antigua que basicamente admitia letras mayusculas, fue cambiado ya que la encriptacion en hexadecimar solo arrojaba letras y numeros, pero no maysculas 
    required: true,
  },
  salt: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.encriptarPassword = function (password) {
  this.salt = crypto.randomBytes(10).toString(`hex`)
  this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 10, 'sha-512').toString('hex')
}

userSchema.methods.validarPassword = function (password, salt, passwordDB) {

  const encriptar = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha-512').toString('hex')
  return encriptar === passwordDB

}

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
