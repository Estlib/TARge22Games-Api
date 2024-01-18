const gamesController = require("../controllers/GamesController");
const influencersController = require("../controllers/InfluencersController");
const letsPlaysController = require("../controllers/LetsPlaysController");

module.exports = (app) => {
    app.route("/games")
        .get(gamesController.getAll)         //get ALL games
        .post(gamesController.createNew)     //make ONE NEW game

    app.route("/games/:id")
        .get(gamesController.getById)        //get ONE game by ID
        .put(gamesController.updateById)     //UPDATE a game by ID
        .delete(gamesController.deleteById)  //DELETE one game by ID

    app.route("/influencers")
        .get(influencersController.getAll)   //get ALL influencers
        .post(influencersController.createNew) // make ONE NEW influencer
        
    app.route("/influencers/:id")
        .get(influencersController.getById)  //get ONE influencer by ID
        .put(influencersController.updateById) //UPDATE a game by ID
        .delete(influencersController.deleteById) //DELETE one influencer by ID
        
    app.route("/letsPlays")
        .get(influencersController.getAll)   //get ALL influencers
}