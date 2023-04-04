
const Router = require('express')
const { createMessage } = require('../controllers/message.controller')

const router = Router()

// router.get('/api/v1/message', getAllMessage)

router.post('/api/v1/messages', createMessage)

module.exports = router