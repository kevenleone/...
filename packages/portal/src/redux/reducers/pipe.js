const INITIAL_STATE = {
  pipe: {},
  pipes: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PIPES': {
      return { ...state, pipes: action.payload }
    }
    case 'SET_PIPE': {
      console.log(action.payload)
      return { ...state, pipe: action.payload }
    }
    default:
      return state
  }
}
