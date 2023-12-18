const Games = require("../models/gamesSchema");

const getGames = async (req, res) => {
  try {
    const games = await Games.find();
    res.json({
      success: true,
      message: "lista de juegos",
      info: games,
    });
  } catch (error) {
    res.json({ succes: false, message: "info no encontrada" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ succes: true, message: "producto creado", info: newProduct });
  } catch (error) {
    res.status(500).json({ succees: false, messagee: error.message });
  }
};

module.exports = { getGames, createProduct };
