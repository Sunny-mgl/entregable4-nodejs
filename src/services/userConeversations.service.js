const UserCoversaPivote = require("../models/UserConverPivote.model")


class UsercConevarsation {
 static async add(data) {
    try {
        const participats = await UserCoversaPivote.create(data)
        return participats
    } catch (error) {
        throw error
    }
 }

 static async addParticipants(participantss){
    try {
        const participant = await UserCoversaPivote.bulkCreate(participantss)
        return participant
    } catch (error) {
        throw error
    }
 }
}

module.exports = UsercConevarsation