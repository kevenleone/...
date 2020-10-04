import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ManagementToolbar from '../../components/ManagementToolbarShort'
import Board from '../../components/Pipefy/Board'
import pusher from '../../services/pusher'
import List from './list'

export { List }

const Pipefy = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch()
  const { me: { _id, sessionId } } = useSelector(state => state.user)

  const getBoard = useCallback(() => {
    dispatch({
      payload: id,
      type: 'REFRESH_BOARD_SAGA'
    })
  }, [dispatch, id])

  useEffect(() => {
    getBoard()
  }, [dispatch, getBoard])

  useEffect(() => {
    const channel = pusher.subscribe('on-change-pipe')
    channel.bind(id, ({ user }) => {
      if (user._id === _id && user.sessionId === sessionId) {
        return
      }
      getBoard()
    })
  }, [_id, id, sessionId, getBoard])

  return (
    <div>
      <ManagementToolbar />
      <Board />
    </div>
  )
}

export default Pipefy
