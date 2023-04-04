const ConversationService = require("../services/conversations.service")
const UsercConevarsation = require('../services/userConeversations.service')


const getConverWithMessage = async ( req, res, next) => {
 try {
    const {idConver} = req.params
    const converWithMessage = await ConversationService.converWithMessage(idConver)
    res.json(converWithMessage)
 } catch (error) {
    next(error)
    // console.log(error)
 }
}

const createCover = async (req, res, next) =>{
    try {
        const { participant, ...conversationInfo} = req.body
        const conversation = await ConversationService.add(conversationInfo)
        await UsercConevarsation.add({ conversationId: conversation.id, idUsers: conversation.createdBy,})
        await UsercConevarsation.add({ conversationId: conversation.id, idUsers:  participant,})
        res.status(201).json({
            message: 'Conversations created'
        })
     } catch (error) {
        // next(error)
        console.log(error)
    }
}


const createGroupConver =  async (req, res, next) => {
    try {
        const {participant, ...conversationInfo} = req.body
        const createConver = await ConversationService.add(conversationInfo)
        await UsercConevarsation.add({ conversationId: createConver.id, idUsers: createConver.createdBy,})
        const participantArray = participant.map((participan) => {
            return {idUsers: participan, conversationId: createConver.id}
        })
        await UsercConevarsation.addParticipants(participantArray)
        res.status(201).json({
            message: 'Conversations created in Group'
        })
    } catch (error) {
        next(error)
    }
}

// const createMesagges = async (req, res, next) => {
//     try {
//         const body = req.body
//         const message = await ConversationService.createM(body)
//         res.status(201).json(message)
//     } catch (error) {
//         next(error)
//     }
// }

const updateTypes = async (req, res, next) => {
    try {
        const {id} = req.params
        const body = req.body
        await ConversationService.updatess(body, id)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}


const deleteConver  = async (req, res, next) => {
    try {
        const {id} = req.params
        await ConversationService.delete(id)
        res.status(201).send()
    } catch (error) {
        next( error )
    }
}


module.exports = {
    getConverWithMessage,
    updateTypes,
    createCover,
    createGroupConver,
    // createMesagges,
    deleteConver,
}