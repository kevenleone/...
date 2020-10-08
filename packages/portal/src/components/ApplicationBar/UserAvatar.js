import ClayDropDown from '@clayui/drop-down'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useLang from '../../hooks/useLang'

const UserAvatar = () => {
  const dispatch = useDispatch()
  const i18n = useLang()
  const [active, setActive] = useState(false)
  const { me: { avatar_url: avatarUrl, name, photo } } = useSelector(state => state.user)

  return <ClayDropDown
    trigger={
      <img className="user-avatar" src={photo || avatarUrl} alt="user-avatar"></img>
    }
    active={active}
    onActiveChange={setActive}
  >
    <ClayDropDown.Help>{`Can I help you? ${name}`}</ClayDropDown.Help>
    <ClayDropDown.ItemList>
      <ClayDropDown.Group header={i18n.get('settings')}>
        <ClayDropDown.Item onClick={() => dispatch({ type: 'SIGNOUT_SAGA' })}>
          {i18n.get('logout')}
        </ClayDropDown.Item>
      </ClayDropDown.Group>
    </ClayDropDown.ItemList>
  </ClayDropDown>
}

export default UserAvatar
