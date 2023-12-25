const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  precio: { type: Number, require: true, min: 0, max: 1000000 },
  img: String,
  descripcion: String,
  stock: {
    type:Number,
    default:0,
    required: true,
    min: 0
  }
});

const Games = mongoose.model("juegos", gameSchema);

module.exports = Games;
