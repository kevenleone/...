const { sub, translate } = require('../utils/helpers')
const logger = require('../utils/logger')

class Controller {
  constructor (model, name = '') {
    this.model = model
    this.name = name
    this.i18n = { get: translate, sub }
    this.logger = logger
  }

  async store (req, res) {
    const { body } = req
    const data = await this.model.create(body)
    res.json({
      data,
      message: this.i18n.sub('CREATED_SUCCESS', this.name)
    })
  }

  async getAll (req, res) {
    const where = req.params
    const data = await this.model.find({
      where
    })
    res.json({
      data
    })
  }

  async getOne (req, res) {
    const { id } = req.params
    const data = await this.model.findById(id)
    res.json({ data })
  }

  async update (req, res) {
    const { body, params: { id } } = req
    const data = await this.model.findByIdAndUpdate(id, body)
    res.json({
      data,
      message: this.i18n.sub('UPDATE_SUCCESS', this.name)
    })
  }

  async remove (req, res) {
    const { id } = req.params
    const condition = {
      where: {
        id: Number(id)
      }
    }
    const response = await this.model.delete(condition)
    res.json({
      data: response,
      message: this.i18n.sub('DELETE_SUCCESS', this.name)
    })
  }
}

module.exports = Controller
