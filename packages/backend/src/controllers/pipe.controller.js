const PipeModel = require('../models/pipe.model')
const Controller = require('./controller')

class Pipe extends Controller {
  constructor () {
    super(PipeModel, 'pipe')
  }
}

module.exports = new Pipe()
