import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import useLang from '../../hooks/useLang'

function AuthMiddleware ({ history, location }) {
  const dispatch = useDispatch()
  const i18n = useLang()
  useEffect(() => {
    const urlQuery = new URLSearchParams(location.search)
    const code = urlQuery.get('code')
    if (code) {
      dispatch({
        payload: { code },
        type: 'SIGNIN_GITHUB_SAGA'
      })
    } else {
      history.push('/auth')
    }
  }, [])

  return (
    <div className="m-auto">
      {i18n.get('wait')}
    </div>
  )
}

export default AuthMiddleware

export { AuthMiddleware }
