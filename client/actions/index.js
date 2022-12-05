import { addBS, deleteBS, getListBS } from '../apis/apiClient'

export const LIST_BS_SUCCESS = 'LIST_BS_SUCCESS'
export const ADD_BS_SUCCESS = 'ADD_BS_SUCCESS'
export const DEL_BS_SUCCESS = 'DEL_BS_SUCCESS'
export const EDIT_BS_SUCCESS = 'EDIT_BS_SUCCESS'

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

export function deleteRecordSuccess(id) {
  return {
    type: DEL_BS_SUCCESS,
    payload: id,
  }
}

export function editRecordSuccess(id) {
  return {
    type: EDIT_BS_SUCCESS,
    payload: id,
  }
}

export function editRecordRequest(id) {
  return (dispatch) => {
    dispatch(editRecordSuccess(id))
  }
}

export function deleteRecordRequest(id) {
  return (dispatch) => {
    return deleteBS(id)
      .then(() => {
        dispatch(deleteRecordSuccess(id))
      })
      .catch((e) => console.error(e.message))
  }
}

export function listBSRequest() {
  return (dispatch) => {
    return getListBS()
      .then((blood_sugars) => {
        dispatch(listBSSuccess(blood_sugars))
      })
      .catch((e) => console.error(e.message))
  }
}

export function addRecordRequest(data) {
  return (dispatch) => {
    return addBS(data)
      .then((addBS) => {
        dispatch(addBSSuccess(addBS))
      })
      .catch((e) => console.error(e.message))
  }
}
