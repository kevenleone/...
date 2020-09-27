import 'react-toastify/dist/ReactToastify.css'

import React, { useReducer } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ToastContainer } from 'react-toastify'

import AppContext, { createReducer, initialState } from './AppContext'
import Routes from './routes'

function App () {
  const reducer = createReducer()
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={[state, dispatch]}>
      <DndProvider backend={HTML5Backend}>
        <ToastContainer />
        <Routes />
      </DndProvider>
    </AppContext.Provider>
  )
}

export default App
