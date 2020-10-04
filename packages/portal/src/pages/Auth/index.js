
import './Auth.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { SignIn } from './SignIn'

export default function Home () {
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
            <SignIn />
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
