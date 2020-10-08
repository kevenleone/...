import ClayLayout from '@clayui/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/Card'
import ManagementToolbar from '../../components/ManagementToolbarShort'
import AddPopover from './PipePopover'

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
      <ManagementToolbar AddButton={AddPopover} />
      <div className='ml-6 mr-2 mt-4'>
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
