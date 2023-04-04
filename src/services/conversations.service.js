const UserCoversaPivote = require("../models/UserConverPivote.model")
const Conversation = require("../models/conversation.model")
const Messsage = require("../models/messages.model")
const User = require("../models/user.model")

class ConversationService {

    static async converWithMessage(idConver) {
        try {
            const result = await Conversation.findByPk(idConver, {
                attributes: ["id", "title"],

                include: [
                    {
                        model: Messsage,
                        attributes: ["content"],
                        include: {
                            model: User,
                            attributes: ["username"],
                        }
                    },
                    {
                        model: UserCoversaPivote,
                        attributes: ["idUsers"],
                        include: {
                            model: User,
                            attributes: ["username"],
                        }

                    }
                ],
            }
            )
            return result
        } catch (error) {
            throw error
            // console.log(error)
        }

    }

    static async add(conversationInfo) {
        try {
            const result = await Conversation.create(conversationInfo)
            return result
        } catch (error) {
            throw error
        }
    }

    //    static async createM(body){
    //     try {
    //         const createMessa = await Messsage.create(body)
    //         return createMessa 
    //     } catch (error) {
    //         throw error
    //     }
    //    }

    static async updatess(body, id) {
        try {
            const result = await Conversation.update(body, {
                where: { id }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id) {
        try {
            const result = await Conversation.destroy({
                where: { id }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = ConversationService