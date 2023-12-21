const {db} = require("../db")
const Influencer = db.influencers

//gets a list of all the influencers
exports.getAll = async (req,res) => {
    const influencers = await Influencer.findAll({attributes:["onlinename"]})
    res.send(influencers)
}

getBaseUrl = (request) => {
    return (
        (request.connection && request.connection.encryption ? "https" : "http") +
        `://${request.headers.host}`
    )
}