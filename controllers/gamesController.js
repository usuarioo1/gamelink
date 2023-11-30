const Games = require("../models/gamesSchema");

const getGames = async (req, res) => {
  try {
    const games = await Games.find();
    res.json({
      succees: true,
      message: "lista de juegos",
      info: games,
    });
  } catch (error) {
    res.json({ succes: false, message: "info no encontrada" });
  }
};

module.exports = getGames;
