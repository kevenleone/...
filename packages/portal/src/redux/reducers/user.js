import jwtDecode from 'jwt-decode'

const token = localStorage.getItem('@token')
let me

if (token) {
  me = jwtDecode(token)
}

const INITIAL_STATE = {
  me,
  token
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
    default:
      return state
  }
}
