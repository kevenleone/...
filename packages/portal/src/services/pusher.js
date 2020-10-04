import Pusher from 'pusher-js'

const PUSHER_APP_KEY = process.env.REACT_APP_PUSHER_APP_KEY || ''

console.log({ PUSHER_APP_KEY })

const pusher = new Pusher(PUSHER_APP_KEY, {
  cluster: 'us2',
  forceTLS: true
})

export default pusher
