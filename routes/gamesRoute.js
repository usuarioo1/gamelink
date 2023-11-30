const express = require("express");
const getGames = require("../controllers/gamesController");

const gamesRouter = express.Router();

gamesRouter.route("/games").get(getGames);

module.exports = gamesRouter;
