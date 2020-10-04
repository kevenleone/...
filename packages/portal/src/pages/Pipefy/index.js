import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ManagementToolbar from '../../components/ManagementToolbarShort'
import Board from '../../components/Pipefy/Board'
import pusher from '../../services/pusher'
import List from './list'

export { List }

const Pipefy = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch()

  const getBoard = () => {
    console.log('GetBoard')
    dispatch({
      payload: id,
      type: 'REFRESH_BOARD_SAGA'
    })
  }

  useEffect(() => {
    getBoard()
  }, [dispatch])

  useEffect(() => {
    const channel = pusher.subscribe('on-change-pipe')
    channel.bind(id, (data) => {
      console.log('HElloooo', data)
      getBoard()
    })

    // socket.emit('connection', { user: 'keven' })
  }, [])

  return (
    <div>
      <ManagementToolbar />
      <Board />
    </div>
  )
}

export default Pipefy
