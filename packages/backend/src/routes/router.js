const { Router } = require('express')

class Route {
  constructor (path, Controller) {
    this.route = Router()
    this.path = path
    this.controller = Controller
    this.initialize()
  }

  initialize () {
    this.route.get(`/${this.path}`, this.controller.getAll.bind(this.controller))
    this.route.get(`/${this.path}/:id`, this.controller.getOne.bind(this.controller))
    this.route.post(`/${this.path}`, this.controller.store.bind(this.controller))
    this.route.put(`/${this.path}/:id`, this.controller.update.bind(this.controller))
    this.route.delete(`/${this.path}/:id`, this.controller.remove.bind(this.controller))
  }
}

module.exports = Route
