import { ClayInput } from '@clayui/form'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import useLang from '../../../hooks/useLang'
import axios from '../../../services/api'

const Recovery = ({ changePage }) => {
  const [email, setEmail] = useState('')
  const i18n = useLang()

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/recovery', { email })
      console.log({ description: response.data.message })
    } catch (e) {
      console.log({ description: e.message })
    }
  }

  return (
    <div className="signin">
      <label htmlFor="email">
        {i18n.get('email-or-username')}
        <ClayInput
          id="email"
          name="email"
          type="text"
          className="text-input"
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <button
        onClick={onSubmit}
        type="button"
        disabled={!email}
        className="primary-btn">
        {i18n.get('recovery')}
      </button>
      <div className="links mt-2">
        <div className="or">
          <hr className="bar" />
          <span>{i18n.get('OR')}</span>
          <hr className="bar" />
        </div>
      </div>
      <button onClick={changePage} className="secondary-btn">
        {i18n.get('back')}
      </button>
    </div>
  )
}

export default withRouter(Recovery)
