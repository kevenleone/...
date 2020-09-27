import 'react-toastify/dist/ReactToastify.css'

import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import history from './config/history'
import store from './redux/store'
import Routes from './routes'

function App () {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <ConnectedRouter history={history}>
          <ToastContainer />
          <Routes />
        </ConnectedRouter>
      </DndProvider>
    </Provider>
  )
}

export default App
