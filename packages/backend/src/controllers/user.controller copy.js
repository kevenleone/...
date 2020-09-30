const User = require('../models/user.model')

module.exports = {
  async destroy (req, res) {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.send({ message: 'User deleted with success' })
  },
  async get (req, res) {
    const { id } = req.params
    try {
      const user = await User.findById(id)
      res.send({ user })
    } catch (err) {
      res.send({ message: 'Id not exists' })
    }
  },
  async index (req, res) {
    const data = await User.find()
    res.send({ data })
  },
  async store (req, res) {
    const user = req.body
    const data = await User.create(user)
    res.send(data)
  },
  async update (req, res) {
    const { id } = req.params
    const body = req.body
    try {
      const user = await User.findByIdAndUpdate(id, body)
      res.send({ user: user })
    } catch (err) {
      res.send({ message: 'Id not exists' })
    }
  }

}
