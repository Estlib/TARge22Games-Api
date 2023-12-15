const gamesController = require("../controllers/GamesController");

module.exports = (app) => {
    app.route("/games")
        .get(gamesController.getAll)

    app.route("/games/:id")
        .get(gamesController.getById)
}