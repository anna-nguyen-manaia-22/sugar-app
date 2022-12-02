import request from 'superagent'

const rootUrl = '/api/v1'

export function getListBS() {
  return request.get(rootUrl + '/blood-sugars').then((res) => {
    return res.body
  })
}

export function addBS(newBS) {
  return request
    .post(rootUrl + `/blood-sugars`)
    .send(newBS)
    .then((res) => {
      return res.body
    })
}

export function deleteBS(id) {
  return request.delete(rootUrl + `/blood-sugars/${id}`).then((res) => {
    return res.body
  })
}
