const {db} = require("../db")
const Influencer = db.influencers

//gets a list of all the influencers
exports.getAll = async (req,res) => {
    const influencers = await Influencer.findAll({attributes:["onlinename"]})
    res.send(influencers)
}

exports.getById = async (req,res) => {
    
    const influencer = await Influencer.findByPk(req.params.id)
    
    if (influencer === 0 || influencer === undefined) {
        res.status(404).send({error:"Influencer not found"})
        return
    } else {
        res.status(200).send(influencer)
    }  
    
}

getBaseUrl = (request) => {
    return (
        (request.connection && request.connection.encryption ? "https" : "http") +
        `://${request.headers.host}`
    )
}