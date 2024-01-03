const Funkos = require('../models/funkoSchema');

const getFunko = async(req,res) => {
    try {
        const funkos = await Funkos.find();
        res.json({
            success:true,
            message:'lista de funkoPops',
            info: funkos,
        })
    } catch (error) {
        res.json({ succes: false, message: "info no encontrada" });
        console.error(error)
    }
}

const getFunkoById = async(req, res) => {

    try {
        const {id} = req.params;
        const product = await Funkos.findById(id);
        res.json({success:true, message: 'producto solcitado', product})
    } catch (error) {
        res.status(500).json({success:false, message: 'producto no encontrado'})
    }
}

module.exports = {getFunko, getFunkoById };