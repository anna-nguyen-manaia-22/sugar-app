import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecordRequest } from '../actions'
import EditBS from './EditBS'

import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

export default function BSItem({ bsRecord }) {
  const dispatch = useDispatch()
  const [onEditing, setOnEditing] = useState(false)

  function onDelete(id) {
    dispatch(deleteRecordRequest(id))
  }

  const measure_datetime = new Date(bsRecord.measure_datetime)

  return (
    <TableRow
      key={bsRecord.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      onDoubleClick={() => setOnEditing((onEditing) => !onEditing)}
    >
      {onEditing ? (
        <React.Fragment>
          <TableCell colSpan="*" align="right">
            <EditBS bsRecord={bsRecord} setOnEditing={setOnEditing} />
          </TableCell>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TableCell align="right">
            {measure_datetime.toLocaleDateString('en-nz')}
          </TableCell>

          <TableCell align="right">
            {measure_datetime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </TableCell>

          <TableCell align="right">{bsRecord.bs_value}</TableCell>
          <TableCell align="right">{bsRecord.note}</TableCell>
          <TableCell align="right">
            <button onClick={() => onDelete(bsRecord.id)}></button>
          </TableCell>
        </React.Fragment>
      )}
    </TableRow>
  )
}
