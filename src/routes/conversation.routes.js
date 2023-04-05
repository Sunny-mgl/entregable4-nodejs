const {Router} = require('express')
const { updateTypes, createCover, createGroupConver, deleteConver, getConverWithMessage} = require('../controllers/conversations.controller')
const { convertatioCreateValidator, convertatioUpdateValidator } = require('../validators/convertation.validator')


const router = Router()

router.get('/api/v1/conver/messagee/:idConver', getConverWithMessage)


router.post('/api/v1/userConver',  convertatioCreateValidator, createCover) // en pareja

router.post('/api/v1/groupConver',  convertatioCreateValidator, createGroupConver)// grupal

// router.post('/api/v1/message/conversation', createMesagges)

router.put('/api/v1/typeChat/:id', convertatioUpdateValidator, updateTypes)

router.delete('/api/v1/conversation/:id',  deleteConver)

module.exports = router

