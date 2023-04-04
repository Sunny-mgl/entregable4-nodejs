const Conversation = require("./conversation.model")
const Messsage = require("./messages.model")
const User = require("./user.model")
const UserCoversaPivote = require("./UserConverPivote.model")



const initModels = () => {

User.hasMany(Messsage, {
     foreignKey: 'userId'
})
Messsage.belongsTo(User, {
    foreignKey: 'userId'
})


User.hasMany(Conversation, {
    foreignKey: 'newConversat'
})
Conversation.belongsTo(User, {
    foreignKey: 'newConversat'
})


Conversation.hasMany(Messsage, {
    foreignKey: 'converId'
})
Messsage.belongsTo(Conversation, {
    foreignKey: 'converId'
})


Conversation.hasMany(UserCoversaPivote, {
    foreignKey:'conversationId'
})
UserCoversaPivote.belongsTo(Conversation, {
    foreignKey: 'conversationId'
})


User.hasMany(UserCoversaPivote, {
    foreignKey: 'idUsers'
})
UserCoversaPivote.belongsTo(User, {
    foreignKey: 'idUsers'
})


}

module.exports = initModels