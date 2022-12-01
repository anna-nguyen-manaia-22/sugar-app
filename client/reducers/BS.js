import { ADD_BS_SUCCESS, DEL_BS_SUCCESS, LIST_BS_SUCCESS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LIST_BS_SUCCESS:
      return payload

    case ADD_BS_SUCCESS:
      return [...state, payload]

    case DEL_BS_SUCCESS:
      return state.filter((bs) => bs.id !== Number(payload))

    default:
      return state
  }
}

export default reducer
