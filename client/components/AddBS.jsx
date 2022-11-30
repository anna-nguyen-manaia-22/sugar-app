import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecordRequest } from '../actions'
const initialData = { date: '', time: '', BS: '', note: '' }

function addBS(props) {
  const [data, setData] = useState(initialData)
  const { date, time, bs_value, note } = data
  const dispatch = useDispatch()

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addRecordRequest())
    setData(initialData)

    props.addRecord({
      measure_datetime: Date.parse(`${date}T$(time):00`),
      bs_value,
      note,
    })
  }
  return (
    <div>
      <h3> Add new blood sugar value</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="date">Date</lable>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="time">Time</lable>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="BS">Blood Sugar Value</lable>
          <input
            type="decimal"
            id="BS"
            name="bs_value"
            value={bs_value}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="note">Note</lable>
          <input
            rows="5"
            type="text"
            id="note"
            name="note"
            value={note}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default addBS
