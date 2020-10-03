import { ClayButtonWithIcon } from '@clayui/button'
import React from 'react'
import { withRouter } from 'react-router-dom'

import { Routes } from '../../routelist'

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
            <button
              aria-expanded="false"
              aria-haspopup="true"
              className="btn btn-unstyled dropdown-toggle nav-btn nav-btn-monospaced"
              data-toggle="dropdown"
              type="button"
            >
              <svg
                className="lexicon-icon lexicon-icon-ellipsis-v"
                focusable="false"
                role="presentation"
              >
                <use href="/images/icons/icons.svg#ellipsis-v"></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(ApplicationBar)
