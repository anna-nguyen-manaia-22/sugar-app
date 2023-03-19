const knex = require('knex')
const config = require('./knexfile')
const testCon = knex(config.test)

const { getBloodSugars } = require('./db')

beforeAll(() => testCon.migrate.latest())
beforeEach(() => testCon.seed.run())

describe('test getBS List', () => {
  it('returns all records in BS table', () => {
    return getBloodSugars(testCon).then((data) => {
      expect(data).toHaveLength(12)
    })
  })
})
