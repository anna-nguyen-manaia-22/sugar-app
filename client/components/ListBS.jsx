import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBSRequest } from '../actions'
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
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Blood Sugar Value</th>
            <th>Note</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bloodsugars.map((bsRecord) => (
            <BSItem key={bsRecord.id} bsRecord={bsRecord} />
          ))}
        </tbody>
      </table>
    </>
  )
}
