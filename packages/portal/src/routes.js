import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ApplicationBar from './components/ApplicationBar'
import Home from './pages/Home'

const Routes = () => (
  <BrowserRouter>
    <ApplicationBar />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Routes
