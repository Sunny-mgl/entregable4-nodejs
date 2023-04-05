const Messsage = require("../models/messages.model")

class MessageServise  {

    static async getAll() {
        try {
            const result = await Messsage.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async createss(body){
        try {
            const result = await Messsage.create(body)
            return result 
        } catch (error) {
            throw error
            // console.log(error)
        }
    }

    static async updates(bodys, id){
        try {
            const result = await Messsage.update(bodys, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
       try {
        const deleteMess = await Messsage.destroy({
            where: {id}
        })
        return deleteMess
       } catch (error) {
        throw error
       }
    }
}

module.exports = MessageServise