import { ClayButtonWithIcon } from '@clayui/button'
import React from 'react'
import { withRouter } from 'react-router-dom'

import { Routes } from '../../routelist'
import UserAvatar from './UserAvatar'

const ApplicationBar = ({ history: { goBack }, match: { path: pathname } }) => {
  const route = Routes.find((route) => route.path === pathname) || {}
  const applicationTitle = route.title || 'Unknown Name'

  return (
    <nav className="application-bar application-bar-dark navbar navbar-expand-md">
      <div className="container-fluid container-fluid-max-xl">
        <ul className="navbar-nav">
          {pathname !== '/' &&
          <li className="nav-item">
            <ClayButtonWithIcon
              onClick={() => goBack()}
              displayType="unstyled"
              symbol="angle-left" />
          </li>}
        </ul>
        <div className="navbar-title navbar-text-truncate">{applicationTitle}</div>
        <ul className="navbar-nav">
          <li className="dropdown nav-item">
            <UserAvatar />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(ApplicationBar)
