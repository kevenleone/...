const { model, Schema } = require('mongoose')

const User = new Schema({
  createdDate: { default: new Date(), type: Date },
  email: String,
  modifiedDate: { default: new Date(), timestamps: true, type: Date },
  name: String,
  password: String
})

module.exports = model('user', User)
