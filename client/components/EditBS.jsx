import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editRecordRequest } from '../actions'

function editBS(props) {
  const { bsRecord, setOnEditing } = props
  const [data, setData] = useState(bsRecord)
  const dispatch = useDispatch()
  function handleSave(e) {
    e.preventDefault()

    const { date, time, bs_value, note } = data
    const newSugar = {
      bs_value,
      note,
      measure_datetime: Date.parse(`${date}T${time}:00`),
    }

    dispatch(editRecordRequest(bsRecord.id, newSugar))
    setOnEditing(false)
  }

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const measure_datetime = new Date(bsRecord.measure_datetime)

  return (
    <div>
      <h3> Edit your blood sugar value</h3>
      <form>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={measure_datetime.toLocaleDateString('en-CA')} //yyyy-mm-dd
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={measure_datetime.toTimeString().substring(0, 8)} //hh-mm-ss
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="BS">Blood Sugar Value</label>
          <input
            type="decimal"
            id="BS"
            name="bs_value"
            value={data.bs_value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="note">Note</label>
          <input
            rows="5"
            type="text"
            id="note"
            name="note"
            value={data.note}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  )
}
export default editBS
