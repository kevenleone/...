const Pipe = require('../controllers/pipe.controller')
const Pusher = require('../utils/pusher')
const Route = require('./router')

class PipeRouter extends Route {
  constructor () {
    const middlewares = function (req, res, next) {
      if (req.method === 'PUT') {
        const loggedUser = req.loggedUser
        const id = req.url.split('/').pop()
        Pusher.trigger('on-change-pipe', id, {
          user: {
            _id: loggedUser._id,
            sessionId: loggedUser.sessionId
          }
        })
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
