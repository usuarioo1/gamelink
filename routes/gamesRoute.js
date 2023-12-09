const express = require("express");
const auth = require('../middleware/auth')
const { getGames, createProduct } = require("../controllers/gamesController");
const gamesRouter = express.Router();

gamesRouter.route("/games").get(auth,getGames); // la persona que puede ver los jeugos es alguein conectad
gamesRouter.route("/createProduct").post(createProduct);

module.exports = gamesRouter;
