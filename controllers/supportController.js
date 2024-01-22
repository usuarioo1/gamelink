const Support = require("../models/supportSchema")

const getMessages = async(req,res) => {
    try {
        const messages = await Support.find();
        res.status(200).json({
            success:true,
            message:"lista de mensajes",
            info:messages
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({success: false,
        message:"error en el servidor"})
    }
}

const getMessageById = async(req,res) => {
    try {
        const {id} = req.params;
        const message = await Support.findById(id);
        res.status(200).json({
            success:true,
            message:"mensaje de usuario",
            info: message
        })
    } catch (error) {
        res.status(500).json({success:false, message: 'mensaje no encontrado'})
    }
}

const sendMessage = async(req,res) => {

    try {
        const newMessage = new Support(req.body)
        await newMessage.save();
        res.status(201).json({success:true,
        message:"mensaje enviado correctamente", info:newMessage})
    } catch (error) {
        console.error(error);
    res.status(500).json({ succes: false, message: "Error en el servidor", error: error.message });
    }
}

module.exports = {getMessages, getMessageById, sendMessage};