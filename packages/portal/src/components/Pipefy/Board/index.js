import React from 'react'

import { loadLists } from '../../../services'
import List from '../List'

export default function index () {
  const lists = loadLists()
  return (
    <div className="pipefy__board">
      {lists.map((list) => (
        <List key={list.title} data={list} />
      ))}
    </div>
  )
}
