const INITIAL_STATE = {
  loginForm: {
    email: '',
    password: ''
  },
  me: JSON.parse(localStorage.getItem('@me') || '{}'),
  pageType: 'SignIn',
  token: localStorage.getItem('@token')
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOGGEDUSER': {
      const { token, user: me } = action.payload
      localStorage.setItem('@me', JSON.stringify(me))
      return {
        ...state,
        me,
        token
      }
    }
    case 'SET_FORMUSER': {
      return { ...state, loginForm: action.payload, pageType: 'SignIn' }
    }
    case 'SET_PAGETYPE': {
      return { ...state, pageType: action.payload.payload.pageType }
    }
    default:
      return state
  }
}
