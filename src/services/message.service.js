const Messsage = require("../models/messages.model")

class MessageServise  {
    static async createss(body){
        try {
            const result = await Messsage.create(body)
            return result 
        } catch (error) {
            throw error
            // console.log(error)
        }
    }
}

module.exports = MessageServise