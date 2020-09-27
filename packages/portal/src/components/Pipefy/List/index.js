import ClayBadge from '@clayui/badge'
import ClayButton from '@clayui/button'
import { ClayInput } from '@clayui/form'
import ClayIcon from '@clayui/icon'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import spritemap from '../../../assets/spritemap.svg'
import Card from '../Card'

const List = ({ data, index: listIndex }) => {
  const [{ editMode, textValue }, setState] = useState({
    editMode: false,
    textValue: data.title
  })
  const dispatch = useDispatch()

  const onClickAction = () => {
    if (editMode) {
      dispatch({
        payload: {
          fromList: listIndex,
          value: textValue
        },
        type: 'BOARD_RENAME_LIST_SAGA'
      })
    }

    setState({
      editMode: !editMode,
      textValue
    })
  }

  return (
    <div className='pipefy__list'>
      <header>
        {editMode
          ? <div className='form'>
            <ClayInput
              type="text"
              onChange={({ target: { value } }) => setState({ editMode, textValue: value })}
              value={textValue} />
          </div> : (
            <h2>
              {data.title}
              <ClayBadge
                className='list-size'
                displayType="secondary"
                label={data.cards.length}/>
            </h2>
          )}

        <ClayButton onClick={onClickAction} displayType="unstyled">
          <ClayIcon symbol={editMode ? 'disk' : 'pencil'} />
        </ClayButton>

      </header>
      {data.cards.map((card, index) => (
        <Card
          key={index}
          listIndex={listIndex}
          index={index}
          data={card} />
      ))}
      <div>
        <ClayButton
          onClick={() => dispatch({ payload: { fromList: listIndex }, type: 'BOARD_ADD_CARD_SAGA' })}
          className='btn-block btn-add-task'>
          <span className="inline-item inline-item-before">
            <ClayIcon spritemap={spritemap} symbol="plus" />
          </span>

          {'Add another task'}
        </ClayButton>
      </div>
    </div>
  )
}

export default List
