const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')

const database = require('./database/config')

const app = express()
//a inicialização do banco tem que ficar bem no início do código!
database.connect()

app.use(cors())
app.use(express.json())

const parceirosRotas = require('./routes/parceirosRoutes')

//rota principal
app.use('/', parceirosRotas)

dotenv.config()

module.exports = app