
const Router = require('express')
const { createMessage, getAllMessages, updateMessage, deleteMessage } = require('../controllers/message.controller')
const { typeUpdateValidator, typeCreateValidator } = require('../validators/message.validator')

const router = Router()

// router.get('/api/v1/message', getAllMessage)
router.get('/api/v1/messagee', getAllMessages)

router.post('/api/v1/messages', typeCreateValidator, createMessage)

router.put('/api/v1/message/:id', typeUpdateValidator, updateMessage)

router.delete('/api/v1/messageDe/:id', deleteMessage)

module.exports = router