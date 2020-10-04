const { Router } = require('express')

const UserRoute = require('./user.route')
const BoardRoute = require('./board.route')
const PipeRoute = require('./pipe.route')

const Routes = Router()

Routes.use('/', UserRoute)
Routes.use('/', BoardRoute)
Routes.use('/', PipeRoute)

module.exports = Routes
