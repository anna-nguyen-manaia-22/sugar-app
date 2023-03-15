import { addRecordRequest, ADD_BS_SUCCESS } from './bs'
import { addBS } from '../apis/apiClient'

jest.mock('../apis/apiClient')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const bsRecord = {
  bs_value: '4.9',
  note: '',
  measure_datetime: 1676368020000,
}
const newId = 100

describe('Create BS', () => {
  it('dispatches the ADD_BS_SUCCESS action', () => {
    const newRecord = { id: newId, ...bsRecord }
    addBS.mockReturnValue(Promise.resolve(newRecord))

    return addRecordRequest(bsRecord)(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: ADD_BS_SUCCESS,
        payload: newRecord,
      })
    })
  })

  it('should console.error() if API request fails', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    addBS.mockImplementation(() => Promise.reject(new Error('Request failed')))
    return addRecordRequest(bsRecord)(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Request failed')
    })
  })
})
