import nock from 'nock'

import { addBS, deleteBS, getListBS } from '../apiClient'

describe('List BS', () => {
  it('can get the list of records', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/blood-sugars')
      .reply(200, {
        measure_datetime: new Date('2022-08-28T06:00:00+13:00'),
        bs_value: 5,
      })

    return getListBS().then((res) => {
      expect(res.bs_value).toBe(5)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('Create BS', () => {
  it('can add a new record', () => {
    const payload = {
      bs_value: '4.9',
      note: '',
      measure_datetime: 1676368020000,
    }
    const newId = 100

    const scope = nock('http://localhost')
      .post('/api/v1/blood-sugars')
      .reply(200, { id: newId, ...payload })

    return addBS(payload).then((res) => {
      expect(res.id).toBe(newId)
      expect(res.bs_value).toBe(payload.bs_value)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('Delete BS', () => {
  it('can remove a new record', () => {
    const oldId = 100

    const scope = nock('http://localhost')
      .delete(`/api/v1/blood-sugars/${oldId}`)
      .reply(200)

    return deleteBS(oldId).then(() => {
      expect(scope.isDone()).toBe(true)
    })
  })
})
