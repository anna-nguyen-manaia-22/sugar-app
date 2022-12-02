import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRecordRequest, listBSRequest } from '../actions'

export default function ListBS() {
  const dispatch = useDispatch()
  const bloodsugars = useSelector((state) => state.BS)
  useEffect(() => {
    dispatch(listBSRequest())
  }, [])

  function onDelete(id) {
    dispatch(deleteRecordRequest(id))
  }

  return (
    <>
      <h3>List of Blood Sugar Values</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Blood Sugar Value</th>
          </tr>
        </thead>
        <tbody>
          {bloodsugars.map((e) => {
            const measure_datetime = new Date(e.measure_datetime)
            return (
              <tr key={e.id}>
                <td>{measure_datetime.toLocaleDateString('en-nz')}</td>

                <td>
                  {measure_datetime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>

                <td>{e.bs_value}</td>
                <td>
                  <button onClick={() => onDelete(e.id)}></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
