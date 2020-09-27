import produce from 'immer'
import React, { useState } from 'react'

import { loadLists } from '../../../services'
import List from '../List'
import BoardContext from './context'

const Board = () => {
  const [lists, setLists] = useState(loadLists())

  function move (fromList, toList, from, to) {
    setLists(produce(
      lists, draft => {
        const dragged = draft[fromList].cards[from]

        draft[fromList].cards.splice(from, 1)
        draft[toList].cards.splice(to, 0, dragged)
      }
    ))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <div className="pipefy__board">
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </div>
    </BoardContext.Provider>
  )
}

export default Board
