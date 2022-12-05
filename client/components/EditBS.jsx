import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editRecordRequest } from '../actions'

function editBS(props) {
  const { bsRecord } = props
  const [data, setData] = useState(bsRecord)
  console.log('bsRecord', props, bsRecord)
  function handleSubmit(e) {
    e.preventDefault()

    const { date, time, bs_value, note } = data
    const newSugar = {
      bs_value,
      note,
      measure_datetime: Date.parse(`${date}T${time}:00`),
    }

    useDispatch(editRecordRequest(newSugar))
    setData(newSugar)
  }

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const measure_datetime = new Date(bsRecord.measure_datetime)
  console.log(bsRecord.measure_datetime)
  console.log(measure_datetime)
  console.log(measure_datetime.toISOString())
  console.log(measure_datetime.toDateString())
  console.log(measure_datetime.toTimeString())
  console.log(measure_datetime.toLocaleTimeString())
  return (
    <div>
      <h3> Edit your blood sugar value</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="date">Date</lable>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={measure_datetime.toLocaleDateString('en-CA')} //yyyy-mm-dd
            onChange={handleChange}
          />
        </div>
        <div>
          <lable htmlFor="time">Time</lable>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={measure_datetime.toTimeString().substring(0, 8)} //hh-mm-ss
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
export default editBS
