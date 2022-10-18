import request from 'superagent'

const rootUrl = '/api/v1'

export function getListBS() {
  return request.get(rootUrl + '/blood-sugars').then((res) => {
    console.log('listBS', res.body)
    return res.body
  })
}
