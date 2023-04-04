const  {DataTypes} = require('sequelize')
const db = require('../utils/db')

const UserCoversaPivote = db.define('pivote', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idUsers: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
})


module.exports= UserCoversaPivote