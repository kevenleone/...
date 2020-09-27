import { ClayInput } from '@clayui/form'
import ClayIcon from '@clayui/icon'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'

// import spritemap from '../../../assets/spritemap.svg'

export default ({ data, index, listIndex }) => {
  const [state, setState] = useState({
    editMode: false,
    inputValue: data.content
  })
  const dispatch = useDispatch()
  const ref = useRef()
  const [{ isDragging }, dragRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    item: {
      data,
      index,
      listIndex,
      type: 'CARD'
    }
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover (item, monitor) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex
      const draggedIndex = item.index
      const targetIndex = index

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return
      }

      const targetSize = ref.current.getBoundingClientRect()
      const targetCenter = (targetSize.bottom - targetSize.top) / 2

      const draggedOffSet = monitor.getClientOffset()
      const draggetTop = draggedOffSet.y - targetSize.top

      if (draggedIndex < targetIndex && draggetTop < targetCenter) {
        return
      }

      if (draggedIndex > targetIndex && draggetTop > targetCenter) {
        return
      }

      dispatch({
        payload: {
          from: draggedIndex,
          fromList: draggedListIndex,
          to: targetIndex,
          toList: targetListIndex
        },
        type: 'BOARD_MOVE_CARD_SAGA'
      })

      item.index = targetIndex
      item.listIndex = targetListIndex
    }
  })

  dragRef(dropRef(ref))

  const labels = data.labels || []
  const { content, user } = data
  const { editMode } = state

  const onClickAction = () => {
    if (editMode) {
      dispatch({
        payload: {
          fromIndex: index,
          fromList: listIndex,
          value: state.inputValue
        },
        type: 'BOARD_RENAME_CARD_SAGA'
      })
    }

    setState({
      ...state,
      editMode: !editMode
    })
  }

  return (
    <div
      className={classNames('pipefy__card', {
        isDragging
      })}
      ref={ref}
    >
      <header>
        {labels.map((label) => (
          <label key={label} style={{ backgroundColor: label }} />
        ))}
        <ClayIcon
          className="edit-card"
          symbol={editMode ? 'disk' : 'pencil'}
          onClick={onClickAction}
        />
      </header>
      {state.editMode ? (
        <ClayInput
          component="textarea"
          onChange={({ target: { value } }) =>
            setState({ ...state, inputValue: value })
          }
          value={state.inputValue}
        />
      ) : (
        <p>{content}</p>
      )}
      <img
        src={
          user || 'https://api.adorable.io/avatars/285/abott@adorable.io.png'
        }
        alt=""
      />
    </div>
  )
}
