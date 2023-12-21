module.exports = (sequelize,Sequelize) => {
    const Influencer = sequelize.define("influencer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        onlinename: {
            type: Sequelize.STRING,
            allowNull: true
        },
        shortbio: {
            type: Sequelize.STRING,
            allowNull: true
        },
        sociallink: {            
            type: Sequelize.STRING,
            allowNull: false
        },
        registeredcompany: {            
            type: Sequelize.STRING,
            allowNull: true
        },
        imageavatarlink: {            
            type: Sequelize.STRING,
            allowNull: true
        },
        isactive: {            
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultvalue: false
        }
    })
    return Influencer
}