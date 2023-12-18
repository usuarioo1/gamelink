const express = require("express");
const auth = require('../middleware/auth')
const { getGames, createProduct } = require("../controllers/gamesController");
const gamesRouter = express.Router();

gamesRouter.route("/games").get(getGames); // la persona que puede ver los jeugos es alguein conectad,ademas agregar la auth antes de getgames
gamesRouter.route("/createProduct").post(createProduct);

module.exports = gamesRouter;
