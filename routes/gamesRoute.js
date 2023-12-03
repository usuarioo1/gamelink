const express = require("express");
const { getGames, createProduct } = require("../controllers/gamesController");
const gamesRouter = express.Router();

gamesRouter.route("/games").get(getGames);
gamesRouter.route("/createProduct").post(createProduct);

module.exports = gamesRouter;
