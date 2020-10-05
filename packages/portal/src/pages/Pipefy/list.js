import ClayButton, { ClayButtonWithIcon } from '@clayui/button'
import ClayForm, { ClayInput } from '@clayui/form'
import ClayLayout from '@clayui/layout'
import ClayPopover from '@clayui/popover'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/Card'
import ManagementToolbar from '../../components/ManagementToolbarShort'
import useLang from '../../hooks/useLang'

const AddButton = () => {
  const i18n = useLang()
  return <ClayPopover
    style={{ maxWidth: 400, width: 400 }}
    alignPosition="bottom"
    disableScroll
    trigger={<ClayButtonWithIcon
      className="nav-btn nav-btn-monospaced"
      symbol="plus"
    />}
    header={i18n.get('new-retro')}
  >
    <ClayForm>
      <ClayForm.Group className="form-group-sm">
        <label htmlFor="basicInput">Name</label>
        <ClayInput placeholder="Name" type="text" />
      </ClayForm.Group>
      <ClayForm.Group className="form-group-sm">
        <label htmlFor="basicInput">Description</label>
        <textarea className="form-control" placeholder="Description" />
      </ClayForm.Group>
      <ClayButton displayType="primary">Save</ClayButton>
    </ClayForm>
  </ClayPopover>
}

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
      <ManagementToolbar AddButton={AddButton} />
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
