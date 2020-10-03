const { model, Schema } = require('mongoose')
const { Schema: BoardSchema } = require('./board.model')

const Pipe = new Schema({
  boards: [BoardSchema],
  createdDate: { default: new Date(), type: Date },
  description: String,
  modifiedDate: { default: new Date(), timestamps: true, type: Date },
  name: String,
  ownedId: Schema.Types.ObjectId
})

module.exports = model('pipe', Pipe)
