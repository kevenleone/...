const User = require('../controllers/user.controller')
const Route = require('./router')

class UserRouter extends Route {
  constructor () {
    super('user', User)
  }

  initialize () {
    super.initialize()
    this.route.post('/auth', User.auth.bind(User))
    this.route.post('/recovery', User.recovery.bind(User))
  }
}

module.exports = new UserRouter().route
