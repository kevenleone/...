const { sub, translate } = require('../utils/helpers')
const logger = require('../utils/logger')

class Controller {
  constructor (model, name = '') {
    this.model = model
    this.name = name
    this.i18n = { get: translate, sub }
    this.logger = logger
  }

  sendErrorResponse (res, { data, message }) {
    res.status(400).send({
      data,
      message
    })
  }

  sendSuccessResponse (res, { data, message }) {
    res.send({
      data,
      message
    })
  }

  async store (req, res) {
    const { body } = req
    const data = await this.model.create(body)
    this.sendSuccessResponse(res, {
      data,
      message: this.i18n.sub('created-success', this.name)
    })
  }

  async getAll (req, res) {
    const data = await this.model.find()
    this.sendSuccessResponse(res, {
      data
    })
  }

  async getOne (req, res) {
    const { id } = req.params
    const data = await this.model.findById(id)
    this.sendSuccessResponse(res, { data })
  }

  async update (req, res) {
    const { body, params: { id } } = req
    const data = await this.model.findByIdAndUpdate(id, body)
    this.sendSuccessResponse(res, {
      data,
      message: this.i18n.sub('update-success', this.name)
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
    this.sendSuccessResponse(res, {
      data: response,
      message: this.i18n.sub('delete-success', this.name)
    })
  }
}

module.exports = Controller
