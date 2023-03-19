import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecordRequest } from '../actions/bs'
import { FiDelete } from 'react-icons/fi'
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
          <td colSpan="*" align="right">
            <EditBS bsRecord={bsRecord} setOnEditing={setOnEditing} />
          </td>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <td align="right">{measure_datetime.toLocaleDateString('en-nz')}</td>

          <td align="right">
            {measure_datetime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </td>

          <td align="right">{bsRecord.bs_value}</td>
          <td align="right">{bsRecord.note}</td>
          <td align="right">
            <FiDelete onClick={() => onDelete(bsRecord.id)} />
          </td>
        </React.Fragment>
      )}
    </tr>
  )
}
