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
    res.status(500).json({ succes: false, message: "info no encontrada, error en el servidor" });
  }
};

const getGamesById = async(req,res) => {

  try {
    const {id} = req.params;
    const product = await Games.findById(id);
    res.json({success:true, message: 'producto solciitado', product})
  } catch (error) {
    res.status(500).json({success:false, message: 'producto no encontrado'})
  }
}

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ succes: true,   message: "producto creado", info: newProduct });
  } catch (error) {
    res.status(500).json({ succees: false, messagee: error.message });
  }
};

const editGame = async(req,res) => {
  const {nombre, precio, img, descripcion } = req.body
  try {
    const {id} = req.params;
    const gameEdit = await Games.findByIdAndUpdate(id, {nombre, precio, img, descripcion})
    res.status(201).json({success:true, message:'producto actualidazo correctamente', editGame})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false, message: error.message})
  }
}

const deleteGame = async(req,res) => {
  try {
    const {id} = req.params;
    const gamesDeleted = await Games.findByIdAndDelete(id)
    res.status(204).json({success:true, message:'producto eliminado con éxito'})
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false, message: error.message})
  }
}

const reduceStock = async(req,res) => {
  const gamePurchased = req.body.cartItems;

  try {
    gamePurchased.map(async(game) => {
      await Games.findByIdAndUpdate(game._id, {stock: game.stock - game.quantity})
    })
    res.status(201).json({success: true, message: 'se ha reducido el stock'})
  } catch (error) {
    console.error(error);
    res.status(500).json({
      succees:false, message: error.message
    })
  }
}
module.exports = { getGames, createProduct, getGamesById, editGame, deleteGame, reduceStock };
