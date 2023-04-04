const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/db')
const initModels = require('./models/initmodel')
const userRoutes= require('./routes/user.routes')
const authRoutes = require('./routes/auth.routes')
const converRoutes = require('./routes/conversation.routes')
const messageRoutes = require('./routes/message.routes')
const errorHandlerRouter = require('./routes/errorHandler.routes')


initModels()

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const port = 8000


db.authenticate()
.then(() => {
    console.log('Database authenticate')
})
.catch((error) => console.log(error))


db.sync({force: false})
.then(() => console.log('Database sync'))
.catch((error) => console.log(error))

app.use(userRoutes)
app.use(authRoutes)
app.use(converRoutes)
app.use(messageRoutes)

app.get('/', ( req, res) => {
    res.send('Welcome to server')
})
 
errorHandlerRouter(app)


app.listen(port, () => {
    console.log(`Server in port ${port}`)
})