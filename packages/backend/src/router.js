const routes = require('express').Router()
const User = require('./controllers/user.controller')

routes.get('/user', User.index)
routes.get('/user/:id', User.get)
routes.put('/user/:id', User.update)
routes.post('/user', User.store)
routes.delete('/user/:id', User.destroy)

module.exports = routes
