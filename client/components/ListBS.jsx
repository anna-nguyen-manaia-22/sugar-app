import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBSRequest } from '../actions/bs'
import BSItem from './BSItem'
export default function ListBS() {
  const dispatch = useDispatch()
  const bloodsugars = useSelector((state) => state.BS)
  useEffect(() => {
    dispatch(listBSRequest())
  }, [])

  return (
    <>
      <h3>List of Blood Sugar Values</h3>
      <div style={{ maxWidth: 650 }}>
        <table className="u-full-width" aria-label="simple table">
          <thead>
            <tr>
              <th align="right">Date</th>
              <th align="right">Time</th>
              <th align="right">BS Value</th>
              <th align="right">Note</th>
              <th align="right">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bloodsugars.map((bsRecord) => (
              <BSItem key={bsRecord.id} bsRecord={bsRecord} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
