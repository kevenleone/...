import Sign, { AuthMiddleware } from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Pipefy, { List } from './pages/Pipefy'

const Routes = [
  {
    active: true,
    component: Dashboard,
    exact: true,
    path: '/',
    private: true,
    title: 'Dashboard'
  },
  {
    active: true,
    component: List,
    exact: true,
    path: '/retro',
    private: true,
    title: 'My Retros'
  },
  {
    active: true,
    component: Pipefy,
    exact: true,
    path: '/retro/:id',
    private: true,
    title: 'Fun Retro - App Builder'
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
  },
  {
    active: true,
    component: AuthMiddleware,
    exact: true,
    path: '/authmiddleware',
    private: false,
    title: 'Auth'
  }
]

export { Routes }
