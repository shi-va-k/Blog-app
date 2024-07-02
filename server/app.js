const app = require('express')()
const http = require('http').Server(app)

const mongoose = require("mongoose")

mongoose.connect

http.listen(3001, ()=>{
    console.log('server run')
})