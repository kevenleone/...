const Pipe = require('../controllers/pipe.controller')
const Pusher = require('../utils/pusher')
const Route = require('./router')

class PipeRouter extends Route {
  constructor () {
    const middlewares = function (req, res, next) {
      if (req.method === 'PUT') {
        const id = req.url.split('/').pop()
        Pusher.trigger('on-change-pipe', id, {})
      }
      next()
    }
    super('pipe', Pipe, [middlewares])
  }

  initialize () {
    super.initialize()
  }
}

const route = new PipeRouter().route

module.exports = route
