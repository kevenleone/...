const Board = require('../controllers/board.controller')
const Route = require('./router')

class BoardRouter extends Route {
  constructor () {
    super('board', Board)
  }

  initialize () {
    super.initialize()
  }
}

module.exports = new BoardRouter().route
