import React from 'react'
import { useDispatch } from 'react-redux'

import Board from '../../components/Pipefy/Board'

const Pipefy = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({
      type: 'REFRESH_BOARD_SAGA'
    })
  }, [dispatch])

  return (
    <div>
      <Board />
    </div>
  )
}

export default Pipefy
