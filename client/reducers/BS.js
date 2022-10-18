import { LIST_BS_SUCCESS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LIST_BS_SUCCESS:
      return payload
    default:
      return state
  }
}

export default reducer
