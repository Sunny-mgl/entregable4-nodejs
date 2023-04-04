const User = require("../models/user.model")


class UserService {

   static async getAll(){
    try {
        const result = await User.findAll()
        return result
    } catch (error) {
        throw error
    }
   }

    static async create(newUser){
        try {
           const result = await User.create(newUser)
           return result 
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    // login
    static async getUser(email) {
        try {
            // SELECT * FROM users WHERE email = email => esto es lo que estamos haciendo aqui 
          const user = await User.findOne({
            where: {email}
          })  
          return user
        } catch (error) {
            throw error
        }
    }

    static async update(updatUser, id){
        try {
            const result = await User.update(updatUser, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id){
        try {
            const result = await User.destroy({
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}
 
module.exports = UserService