import React from 'react'
import { useDispatch } from 'react-redux'

import ManagementToolbar from '../../components/ManagementToolbarShort'
import Board from '../../components/Pipefy/Board'
import List from './list'

export { List }

const Pipefy = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
      type: 'REFRESH_BOARD_SAGA'
    })
  }, [dispatch])

  return (
    <div>
      <ManagementToolbar />
      <Board />
    </div>
  )
}

export default Pipefy
