import Sign from './pages/Auth'
import Home from './pages/Home'
import Pipefy from './pages/Pipefy'

const Routes = [
  {
    active: true,
    component: Pipefy,
    exact: true,
    path: '/',
    private: true,
    title: 'Dashboard'
  },
  {
    active: true,
    component: Home,
    exact: true,
    path: '/home',
    private: false,
    title: 'Home'
  },
  {
    active: true,
    component: Sign,
    exact: true,
    path: '/auth',
    private: false,
    title: 'Auth'
  }
]

export { Routes }
