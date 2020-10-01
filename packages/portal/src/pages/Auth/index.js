
import './Auth.css'

import { ClayInput } from '@clayui/form'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useLang from '../../hooks/useLang'
import { Recovery, SignIn } from './SignIn'

export default function Home () {
  const [signInPage, setSignInPage] = useState(true)
  const i18n = useLang()

  const changePage = () => setSignInPage(!signInPage)

  return (
    <div id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Liferay-logo-full-color-2x.png"
              alt="Alural Xight" />
          </div>
          <div className='content'>
            {signInPage ? <SignIn></SignIn> : <Recovery></Recovery>}
          </div>
        </div>
        <footer id="main-footer">
          <p>Copyright &copy; 2020, All Rights Reserved</p>
          <div>
            <Link to="terms">
              Terms of use / &ensp;
            </Link>
            <Link to="/policies">Privacy Policies</Link>
          </div>
        </footer>
      </div>
      <div id="right">
        <div id="showcase">
        </div>
      </div>
    </div>
  )
}
