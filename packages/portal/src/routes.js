import React from 'react'
import { useSelector } from 'react-redux'
import {
  Redirect,
  Route, Switch
} from 'react-router-dom'

import ApplicationBar from './components/ApplicationBar'
import { Routes } from './routelist'

const isAuthenticated = localStorage.getItem('@token')

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { me, token } = useSelector((state) => state.user)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token && me) {
          return (
            <div>
              <ApplicationBar />
              <Component {...props} />
            </div>
          )
        }
        return <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
      }}
    />
  )
}

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthenticated && window.location.pathname === '/auth'
        ? <Redirect to={{ pathname: '/' }} />
        : <Component {...props} />
    )}
  />
)

const Router = () => {
  const Private = Routes.filter((r) => !r.private && r.component)
  const Public = Routes.filter((r) => r.private && r.component)
  return (
    <Switch>
      { Private.map((r) => <PublicRoute key={r.title} {...r} />)}
      { Public.map((r) => <PrivateRoute key={r.title} {...r} />)}
      <Redirect to="/" />
    </Switch>
  )
}

export default Router
