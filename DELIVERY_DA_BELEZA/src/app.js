const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')

const database = require('./database/config')

const app = express()
app.use(cors())
app.use(express.json())

const parceiros = require('./routes/parceirosRoutes')



//rota principal
app.use('/', parceiros)

dotenv.config()


database.connect()

module.exports = app