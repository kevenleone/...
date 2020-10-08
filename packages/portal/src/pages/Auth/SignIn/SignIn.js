import { ClayInput } from '@clayui/form'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import useLang from '../../../hooks/useLang'

const SignIn = ({ changePage, history }) => {
  const i18n = useLang()
  const [state, setState] = useState({ email: '', password: '' })
  const { email, password } = state
  const dispatch = useDispatch()

  const onChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    dispatch({
      payload: state,
      type: 'SIGNIN_SAGA'
    })
  }

  const githubOAuth = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=01e1501a136ae11e4006&scope=user'
  }

  return (
    <>
      <label htmlFor="email">
        {i18n.get('email-or-username')}
        <ClayInput
          id="email"
          name="email"
          value={email}
          type="text"
          className="text-input"
          onChange={onChange}
        />
      </label>
      <label htmlFor="password">
        {i18n.get('password')}
        <ClayInput
          id="password"
          name="password"
          value={password}
          type="password"
          onChange={onChange}
          className="text-input"
        />
      </label>
      <button
        onClick={onSubmit}
        type="button"
        disabled={!email || !password}
        className="primary-btn">
        {i18n.get('sign-in')}
      </button>
      <div className="links mt-2">
        <div className="or">
          <hr className="bar" />
          <span>{i18n.get('or')}</span>
          <hr className="bar" />
        </div>
      </div>
      <button onClick={githubOAuth} className="primary-btn github-btn">
        {i18n.get('sign-in-github')}
      </button>
      <button onClick={changePage} className="secondary-btn">
        {i18n.get('forgot-password')}
      </button>
    </>
  )
}

export default withRouter(SignIn)
