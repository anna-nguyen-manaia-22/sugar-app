import { getListBS } from '../apis/apiClient'

export const LIST_BS_SUCCESS = 'LIST_BS_SUCCESS'
export const ADD_BS_SUCCESS = 'ADD_BS_SUCCESS'

export function listBSSuccess(blood_sugars) {
  return {
    type: LIST_BS_SUCCESS,
    payload: blood_sugars,
  }
}

export function addBSSuccess(blood_sugars) {
  return {
    type: ADD_BS_SUCCESS,
    payload: blood_sugars,
  }
}

export function listBSRequest(blood_sugars) {
  return (dispatch) => {
    return getListBS()
      .then((result) => {
        console.log('getListBS', result)
        dispatch(listBSSuccess(blood_sugars))
      })
      .catch((e) => console.error(e.message))
  }
}

export function addRecordRequest(data) {
  return (dispatch) => {
    dispatch(addBSSuccess(data))
  }
}
