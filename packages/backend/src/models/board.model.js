const { model, Schema } = require('mongoose')

const Board = new Schema({
  cards: [{
    content: String,
    id: Number,
    user: String
  }],
  createdDate: { default: new Date(), type: Date },
  modifiedDate: { default: new Date(), timestamps: true, type: Date },
  ownedId: Schema.Types.ObjectId,
  title: String
})

module.exports = model('board', Board)
