const Pusher = require('pusher')
require('dotenv').config()

const {
  PUSHER_APP_ID,
  PUSHER_APP_KEY,
  PUSHER_APP_SECRET
} = process.env

const pusher = new Pusher({
  appId: PUSHER_APP_ID,
  cluster: 'us2',
  key: PUSHER_APP_KEY,
  secret: PUSHER_APP_SECRET,
  useTLS: true
})

module.exports = pusher
