const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
    name: { type: String, require: true },
    mail: {
        type: String,
        trim: true,
        required: true,
        // match: [
        //     /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        // ],
    },
    mensaje: {
        type: String,
        default: "no hay mensaje",
    },

})

const Support = mongoose.model("mensajes", supportSchema);

module.exports = Support