const INITIAL_STATE = {
  list: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_BOARD': {
      return { ...state, list: action.payload }
    }
    default:
      return state
  }
}
