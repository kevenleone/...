import ClayLayout from '@clayui/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/Card'

export default function List () {
  const { list } = useSelector(state => state.board)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'REFRESH_BOARD_SAGA'
    })
  }, [dispatch])

  console.log(list)

  return (
    <div className='m-5'>
      <ClayLayout.Row>
        <Card
          className='mr-4' description="ssaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkdassaskdjasdlkasjlkda..."
          onClick={() => alert('clicked')}

          title="onClick Card with icon"></Card>
      </ClayLayout.Row>
    </div>
  )
}
