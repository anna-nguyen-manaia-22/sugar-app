import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecordRequest } from '../actions'
const initialData = { date: '', time: '', bs_value: 0, note: '' }

function addBS() {
  const [data, setData] = useState(initialData)

  const dispatch = useDispatch()

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const { date, time, bs_value, note } = data
    const newSugar = {
      bs_value,
      note,
      measure_datetime: Date.parse(`${date}T${time}:00`),
    }

    dispatch(addRecordRequest(newSugar))
    setData(initialData)
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
            value={data.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="time">Time</lable>
          <input
            type="time"
            id="time"
            name="time"
            value={data.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="BS">Blood Sugar Value</lable>
          <input
            type="decimal"
            id="BS"
            name="bs_value"
            value={data.bs_value}
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
            value={data.note}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default addBS
