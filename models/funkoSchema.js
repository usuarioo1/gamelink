const mongoose = require("mongoose");

const funkoSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    valor: { type: Number, require: true, min: 0, max: 1000000 },
    descripcion: String,
    img: String
    
});

const Funkos = mongoose.model("funkopops", funkoSchema);

module.exports = Funkos;
