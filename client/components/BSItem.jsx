import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecordRequest } from '../actions'
import EditBS from './EditBS'

export default function BSItem({ bsRecord }) {
  const dispatch = useDispatch()
  const [onEditing, setOnEditing] = useState(false)

  function onDelete(id) {
    dispatch(deleteRecordRequest(id))
  }

  const measure_datetime = new Date(bsRecord.measure_datetime)

  return (
    <tr
      key={bsRecord.id}
      onDoubleClick={() => setOnEditing((onEditing) => !onEditing)}
    >
      {onEditing ? (
        <React.Fragment>
          <td colSpan="*">
            <EditBS bsRecord={bsRecord} />
          </td>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <td>{measure_datetime.toLocaleDateString('en-nz')}</td>

          <td>
            {measure_datetime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </td>

          <td>{bsRecord.bs_value}</td>
          <td>{bsRecord.note}</td>
          <td>
            <button onClick={() => onDelete(bsRecord.id)}></button>
          </td>
        </React.Fragment>
      )}
    </tr>
  )
}
