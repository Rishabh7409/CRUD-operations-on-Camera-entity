const express = require('express')
const { registerRouters } = require('./rest-api/route-register')
const cors = require('cors')

const app = express()
app.use(cors())
//app.use(express.json())

registerRouters(app)

module.exports = { app } 
