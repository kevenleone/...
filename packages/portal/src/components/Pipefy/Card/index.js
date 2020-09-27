import React from 'react'

export default function index ({ data }) {
  return (
    <div className='pipefy__card'>
      <header>
        {data.labels.map(label => (<label key={label} style={{ backgroundColor: label }} />))}
      </header>
      <p>{data.content}</p>
      <img src={data.user || 'https://api.adorable.io/avatars/285/abott@adorable.io.png'} alt=""></img>
    </div>
  )
}
