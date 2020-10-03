const INITIAL_STATE = {
  pipes: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PIPES': {
      return { ...state, pipes: action.payload }
    }
    default:
      return state
  }
}
