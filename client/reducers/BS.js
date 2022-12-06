import {
  ADD_BS_SUCCESS,
  DEL_BS_SUCCESS,
  EDIT_BS_SUCCESS,
  LIST_BS_SUCCESS,
} from '../actions'

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

    case EDIT_BS_SUCCESS: {
      const editState = [...state]
      const target = editState.find((bs) => bs.id === Number(payload.id))
      console.log('target', target)
      console.log('payload', payload)
      const { id, data } = payload
      editState.splice(editState.indexOf(target), 1, { id, ...data })

      return editState
    }
    default:
      return state
  }
}

export default reducer
