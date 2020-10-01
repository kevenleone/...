const BoardModel = require('../models/board.model')
const Controller = require('./controller')

class Board extends Controller {
  constructor () {
    super(BoardModel, 'board')
  }
}

module.exports = new Board()
