import './index.css'

import { ClayInput } from '@clayui/form'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn () {
  return (
    <div id="wrapper">
      <div id="left">
        <div id="signin">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Liferay-logo-full-color-2x.png"
              alt="Alural Xight" />
          </div>
          <form>
            <div>
              <label htmlFor="email">
                Email or Username
                <ClayInput
                  id="email" name="email" type="text" className="text-input" />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password
                <ClayInput id="password" name="password" type="password" className="text-input" />
              </label>
            </div>
            <button type="button" className="primary-btn">
              Sign In
            </button>
          </form>
          <div className="links">
            <Link to="/forgot">Forgot Password</Link>
            <Link to="/signin1">Sign in with company or school</Link>
          </div>
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <Link to="/create" className="secondary-btn"> Create an account </Link>
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
