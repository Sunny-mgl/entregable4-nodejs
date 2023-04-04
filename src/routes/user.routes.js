const {Router} = require('express')
const { createUser, allUsers, updateUsers, deleteUser } = require('../controllers/user.controller')
const { createUserValidator, updateUserValidator } = require('../validators/user.validator')

const router = Router()

router.get('/api/v1/users', allUsers)

router.post('/api/v1/users', createUserValidator ,createUser)

router.put('/api/v1/users/:id', updateUserValidator ,updateUsers)

router.delete('/api/v1/users/:id', deleteUser)


module.exports = router