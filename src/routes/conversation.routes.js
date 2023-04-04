const {Router} = require('express')
const { updateTypes, createCover, createGroupConver, deleteConver, getConverWithMessage } = require('../controllers/conversations.controller')


const router = Router()

router.get('/api/v1/conver/messagee/:idConver', getConverWithMessage)

router.post('/api/v1/userConver', createCover) // en pareja

router.post('/api/v1/groupConver', createGroupConver)// grupal

// router.post('/api/v1/message/conversation', createMesagges)

router.put('/api/v1/typeChat/:id', updateTypes)

router.delete('/api/v1/conversation/:id',  deleteConver)

module.exports = router

