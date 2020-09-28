import { ClayInput } from '@clayui/form'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import useLang from '../../../hooks/useLang'
import axios from '../../../services/api'

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
    try {
      const response = await axios.post('/auth', state)
      const { token } = response.data
      dispatch({
        payload: {
          token
        },
        type: 'SET_LOGGED_USER'
      })
      console.log({ description: 'welcome-back' })
      history.push('/dashboard')
    } catch (e) {
      console.log({ description: e.message })
    }
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
      <button onClick={changePage} className="secondary-btn">
        {i18n.get('forgot-password')}
      </button>
    </>
  )
}

export default withRouter(SignIn)
