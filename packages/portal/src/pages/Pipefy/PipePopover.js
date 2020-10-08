import ClayButton, { ClayButtonWithIcon } from '@clayui/button'
import ClayForm, { ClayInput } from '@clayui/form'
import ClayPopover from '@clayui/popover'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import useLang from '../../hooks/useLang'

const AddPopover = () => {
  const i18n = useLang()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    description: '',
    name: ''
  })

  const onChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({
      payload: form,
      type: 'ADD_PIPE_SAGA'
    })
  }
  return (
    <ClayPopover
      style={{ maxWidth: 400, width: 400 }}
      alignPosition="bottom"
      disableScroll
      trigger={
        <ClayButtonWithIcon
          className="nav-btn nav-btn-monospaced"
          symbol="plus"
        />
      }
      header={i18n.get('new-retro')}
    >
      <ClayForm onSubmit={onSubmit}>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">{i18n.get('name')}</label>
          <ClayInput type="text" name="name" value={form.name} onChange={onChange} />
        </ClayForm.Group>
        <ClayForm.Group className="form-group-sm">
          <label htmlFor="basicInput">{i18n.get('description')}</label>
          <textarea className="form-control" name="description" value={form.description} onChange={onChange} />
        </ClayForm.Group>
        <ClayButton
          disabled={!form.name.trim()}
          displayType="primary"
          onClick={onSubmit}
        >
          {i18n.get('save')}
        </ClayButton>
      </ClayForm>
    </ClayPopover>
  )
}

export default AddPopover
