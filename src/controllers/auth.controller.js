const UserService = require("../services/user.service")
const bcrypt = require('bcrypt')

const userLogin = async (req, res, next) => {
 try {
    //destructuramos para obtener el email y el password 
    const {email, password} = req.body
    const user = await UserService.getUser(email)
    if (!user){
        //  return res.status(400).json(error)
        return next({
           status: 400,
           message: 'Invalid email',
           error: 'User not found'
        })
      }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) {
        // return res.status(400).json(error)
         return next({
           status: 400,
           message: 'Password is not correct',
           error: 'Invalid password',
        })
    }
    const {
         id, 
         firstname,
         lastname,
         username,
        } = user
    res.json({
        id, firstname, lastname, username, email
    })
    // res.json({
    //     email: user.email,
    //     username: user.username,
    //     firstname: user.firstname,
    //     lastname: user.lastname
    // })
 } catch (error) {
  next(error)
 }
}


module.exports = {
    userLogin
}