const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  precio: { type: Number, require: true, min: 0, max: 1000000 },
  img: String,
  descripcion: String
});

const Games = mongoose.model("juegos", gameSchema);

module.exports = Games;
