const UserService = require("../services/user.service")

const allUsers = async (req, res, next) => {
    try {
        const user = await UserService.getAll()
        res.json(user)
    } catch (error) {
       next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body
        const user = await UserService.create(newUser)
        res.status(201).json(user)
    } catch (error) {
       next(error)
    // res.status(400).json(error)
    }
}



const updateUsers = async (req, res, next) => {
   try {
    const {id} = req.params
    const updatUser = req.body
     await UserService.update(updatUser, id)
    res.status(204).send()
   } catch (error) {
    next( error)
   }
}

const deleteUser = async ( req, res, next ) => {
    try {
        const {id} = req.params
        await UserService.delete(id)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports ={ 
    createUser,
    allUsers,
    updateUsers,
    deleteUser
}