module.exports = (sequelize,Sequelize,Game,Influencer) => {
    const LetsPlay = sequelize.define("letsPlay", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gameId: {
            type: Sequelize.INTEGER,
            references: {
                model: Game,
                key: "id",
            }
        },
        influencerId: {
            type: Sequelize.INTEGER,
            references: {
                model: Influencer,
                key: "id",
            }
        }
    })
    Game.belongsToMany(Influencer, { through: LetsPlay})
    Influencer.belongsToMany(Game, { through: LetsPlay})
    Game.hasMany(LetsPlay)
    LetsPlay.belongsTo(Game)
    Influencer.hasMany(LetsPlay)
    LetsPlay.belongsTo(Influencer)
    return LetsPlay
}