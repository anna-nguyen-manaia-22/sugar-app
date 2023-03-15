import nock from 'nock'

import { getListBS } from './apiClient'

describe('getListBS', () => {
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
