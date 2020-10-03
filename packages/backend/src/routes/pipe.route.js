const Pipe = require('../controllers/pipe.controller')
const Route = require('./router')

class PipeRouter extends Route {
  constructor () {
    super('pipe', Pipe)
  }

  initialize () {
    super.initialize()
  }
}

module.exports = new PipeRouter().route
