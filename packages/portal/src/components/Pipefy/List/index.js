import React from 'react'
import { MdAdd } from 'react-icons/md'

import Card from '../Card'

export default function index ({ data }) {
  return (
    <div className='pipefy__list'>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && <button type="button">
          <MdAdd size={24} color="#fff" />
        </button>}

      </header>
      {data.cards.map(card => (
        <Card key={data.id} data={card} />
      ))}
    </div>
  )
}
