import React from 'react'
import { useSelector } from 'react-redux'

import List from '../List'

const Board = () => {
  const { list: lists } = useSelector(state => state.board)

  return (
    <div className="pipefy__board">
      {lists.map((list, index) => (
        <List key={list.title} index={index} data={list} />
      ))}
    </div>
  )
}

export default Board
