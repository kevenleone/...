import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ApplicationBar from './components/ApplicationBar'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Pipefy from './pages/Pipefy'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/auth" exact component={Auth} />
      <>
        <ApplicationBar />
        <Route path="/" exact component={Pipefy} />
        <Route path="/home" exact component={Home} />
      </>
    </Switch>
  </BrowserRouter>
)

export default Routes
