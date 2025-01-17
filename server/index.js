const express = require('express')
const cors = require('cors')
const {connect} = require('mongoose')
require('dotenv').config()
const upload = require('express-fileupload')

const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.use(notFound)
app.use(errorHandler)
app.use(upload())
app.use('/uploades', express.static(__dirname + '/uploades'))

connect(process.env.MONGO_URI).then(app.listen(process.env.PORT || 5000, ()=> console.log(`server started at ${process.env.PORT}`))).catch(error => {console.log(error)})
