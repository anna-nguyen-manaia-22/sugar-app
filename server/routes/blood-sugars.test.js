const request = require('supertest')
const { getBloodSugars } = require('../db/db')
const server = require('../server')

jest.mock('../db/db')

jest.spyOn(console, 'error')
afterEach(() => {
  console.error.mockReset()
})

const getBloodSugarsMockData = [
  {
    measure_datetime: new Date('2022-08-28T06:00:00+13:00'),
    bs_value: 5,
  },
  {
    measure_datetime: new Date('2022-08-28T12:00:00+13:00'),
    bs_value: 7,
  },
]

describe('GET /api/v1/blood-sugars', () => {
  it('returns all records', () => {
    getBloodSugars.mockReturnValue(Promise.resolve(getBloodSugarsMockData))
    return request(server)
      .get('/api/v1/blood-sugars')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[0].bs_value).toBe(5)
      })
  })
  it('return status 500 and consoles error when problem', () => {
    const err = new Error('did not work')
    getBloodSugars.mockImplementation(() => Promise.reject(err))
    console.error.mockImplementation(() => {})

    return request(server)
      .get('/api/v1/blood-sugars')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('did not work')
      })
  })
})
