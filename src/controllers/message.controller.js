const MessageServise = require("../services/message.service")

const getAllMessages = async (req, res, next) => {
    try {
        const messages = await MessageServise.getAll()
        res.json(messages)
    } catch (error) {
        next(error)
    }
}

const createMessage = async (req, res, next) => {
    try {
        const body = req.body
        await MessageServise.createss(body)
        res.status(201).send()
    } catch (error) {
        next(error)
        // console.log(error)
    }
}

const updateMessage = async (req, res, next) => {
    try {
        const { id } = req.params
        const bodys = req.body
        await MessageServise.updates(bodys, id)
        res.status(204).send()
    } catch (error) {
        next(error)
        // console.log(error)
    }
}

const deleteMessage = async (req, res, next) => {
    try {
        const {id} = req.params
        await MessageServise.delete(id)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllMessages,
    createMessage,
    updateMessage,
    deleteMessage
}