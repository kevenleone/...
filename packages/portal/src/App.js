import 'react-toastify/dist/ReactToastify.css'

import { ClayIconSpriteContext } from '@clayui/icon'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import spritemap from './assets/spritemap.svg'
import history from './config/history'
import store from './redux/store'
import Routes from './routes'

function App () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <DndProvider backend={HTML5Backend}>
          <ClayIconSpriteContext.Provider value={spritemap}>
            <ToastContainer />
            <Routes />
          </ClayIconSpriteContext.Provider>
        </DndProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
