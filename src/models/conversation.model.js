const {DataTypes} = require('sequelize')
const db = require('../utils/db')

const Conversation = db.define ('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    types: {
    type: DataTypes.ENUM('single', 'group'),
     allowNull: false,
     defaultValue: 'single'
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
 
})

module.exports= Conversation