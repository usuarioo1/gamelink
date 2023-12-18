const Funkos = require('../models/funkoSchema');

const getFunko = async(req,res) => {
    try {
        const funko = await Funkos.find();
        res.json({
            success:true,
            message:'lista de funkoPops',
            info: funko
        })
    } catch (error) {
        res.json({ succes: false, message: "info no encontrada" });
        console.error(error)
    }
}

module.exports = getFunko;