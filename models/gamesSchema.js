const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  img: String,
});

const Games = mongoose.model("juegos", gameSchema);

module.exports = Games;
