import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ManagementToolbar from '../../components/ManagementToolbarShort'
import Board from '../../components/Pipefy/Board'
import pusher from '../../services/pusher'
import List from './list'

export { List }

const Pipefy = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch()
  const { me: { _id, sessionId } } = useSelector(state => state.user)

  const getBoard = () => {
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
    channel.bind(id, ({ user }) => {
      if (user._id === _id && user.sessionId === sessionId) {
        return
      }
      getBoard()
    })
  }, [])

  return (
    <div>
      <ManagementToolbar />
      <Board />
    </div>
  )
}

export default Pipefy
