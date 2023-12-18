const mongoose = require("mongoose");

const funkoSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    precio: { type: Number, require: true, min: 0, max: 1000000 },
    img: String,
    descripcion: String
});

const Funkos = mongoose.model("funkopop", funkoSchema);

module.exports = Funkos;
