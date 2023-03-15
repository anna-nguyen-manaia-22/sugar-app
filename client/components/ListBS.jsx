import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBSRequest } from '../actions'
import BSItem from './BSItem'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
export default function ListBS() {
  const dispatch = useDispatch()
  const bloodsugars = useSelector((state) => state.BS)
  useEffect(() => {
    dispatch(listBSRequest())
  }, [])

  return (
    <>
      <h3>List of Blood Sugar Values</h3>
      <TableContainer>
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">BS Value</TableCell>
              <TableCell align="right">Note</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bloodsugars.map((bsRecord) => (
              <BSItem key={bsRecord.id} bsRecord={bsRecord} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
