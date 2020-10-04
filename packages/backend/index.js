const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./src/routes')
const mongoose = require('mongoose')
const morgan = require('morgan')
const jwtMiddleware = require('./src/middlewares/jwt.middleware')

require('dotenv').config()

mongoose.connect('mongodb://localhost:27017/zzz', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const PORT = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.use('/api', jwtMiddleware, Routes)

app.listen(PORT, () => {
  console.log(`Server listening ${PORT}`)
})
