const {DataTypes} = require('sequelize')
const db = require('../utils/db')

const Messsage = db.define('messages', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
    },
    converId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: true,
    updatedAt: false 
})

module.exports = Messsage