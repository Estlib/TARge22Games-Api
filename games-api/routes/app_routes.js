const gamesController = require("../controllers/GamesController");
const influencersController = require("../controllers/InfluencersController");

module.exports = (app) => {
    app.route("/games")
        .get(gamesController.getAll)         //get ALL games
        .post(gamesController.createNew)     //make ONE NEW game

    app.route("/games/:id")
        .get(gamesController.getById)        //get ONE game by ID
        .put(gamesController.updateById)     //UPDATE one game by ID
        .delete(gamesController.deleteById)  //DELETE one game by ID

    app.route("/influencers")
        .get(influencersController.getAll)   //get ALL influencers
}