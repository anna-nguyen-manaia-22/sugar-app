import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AddBS from '../AddBS'
import { addRecordRequest } from '../../actions/bs'

jest.mock('react-redux')
jest.mock('../../actions/bs')

describe('Component <AddBS/>', () => {
  const fakeDispatch = jest.fn()
  addRecordRequest.mockReturnValue(jest.fn())

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('displays heading', () => {
    useDispatch.mockReturnValue(fakeDispatch)

    render(<AddBS />, { wrapper: BrowserRouter })
    const levelTwoHeading = screen.getAllByRole('heading', { level: 3 })

    expect(levelTwoHeading).toHaveLength(1)
  })

  it('can submit new BS', () => {
    useDispatch.mockReturnValue(fakeDispatch)

    const newBsMock = {
      date: '15/03/2023',
      time: '01:27',
      bs_value: 4.7,
      note: 'Well done!',
    }

    render(<AddBS />, { wrapper: BrowserRouter })
    fireEvent.change(screen.getByLabelText('Date'), {
      target: { value: newBsMock.date },
    })
    fireEvent.change(screen.getByLabelText('Time'), {
      target: { value: newBsMock.time },
    })
    fireEvent.change(screen.getByLabelText('Blood Sugar Value'), {
      target: { value: newBsMock.bs_value },
    })
    fireEvent.change(screen.getByLabelText('Note'), {
      target: { value: newBsMock.note },
    })
    fireEvent.click(screen.getByRole('button'))

    expect.assertions(1)
    expect(fakeDispatch).toHaveBeenCalledWith(addRecordRequest())
  })
})
