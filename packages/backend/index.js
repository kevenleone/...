const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./src/routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/zzz', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const PORT = process.env.PORT || 3333
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', Routes.UserRoute)
app.use('/api', Routes.BoardRoute)
app.use('/api', Routes.PipeRoute)

app.listen(PORT, () => {
  console.log(`Server listening ${PORT}`)
})
