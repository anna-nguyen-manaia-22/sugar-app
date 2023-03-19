import { addBSSuccess, listBSSuccess } from '../actions/bs'
import reducer from './BS'

const fakeBSList = [
  {
    date: '15/03/2023',
    time: '01:27',
    bs_value: 4.7,
    note: 'Well done!',
  },
  {
    date: '16/03/2023',
    time: '10:2',
    bs_value: 8.0,
    note: 'too high!',
  },
]

describe('BS reducer/list all', () => {
  test('show list of BS', () => {
    const initialState = []
    const action = listBSSuccess(fakeBSList)
    const newState = reducer(initialState, action)
    expect(newState[0].bs_value).toBe(4.7)
    expect(newState).toHaveLength(2)
  })
})

describe('BS reducer/add one', () => {
  test('add a new BS record', () => {
    const fakeNewBS = {
      date: '17/03/2023',
      time: '12:01',
      bs_value: 2.0,
      note: 'dangerous!',
    }
    const action = addBSSuccess(fakeNewBS)
    const newState = reducer(fakeBSList, action)
    expect(newState[2].bs_value).toBe(2.0)
    expect(newState).toHaveLength(3)
  })
})
