const MessageServise = require("../services/message.service")

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

module.exports= {
    createMessage,
}