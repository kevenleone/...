import ClayLayout from '@clayui/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/Card'
import ManagementToolbar from '../../components/ManagementToolbarShort'

export default function List ({ history }) {
  const { pipes } = useSelector(state => state.pipe)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'GET_PIPES_SAGA'
    })
  }, [dispatch])

  return (
    <div>
      <ManagementToolbar />
      <div className='m-4'>
        <ClayLayout.Row>
          {pipes.map((pipe, index) => (
            <Card
              key={index}
              className='mr-4' description={pipe.description}
              onClick={() => history.push(`/retro/${pipe._id}`)}
              title={pipe.name} />
          ))}
        </ClayLayout.Row>
      </div>
    </div>
  )
}
