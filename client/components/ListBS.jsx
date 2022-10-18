import React, { useEffect, useState } from 'react'
import { getListBS } from '../apis/apiClient'

export default function ListBS() {
  const [bloodsugars, setBloodsugars] = useState([])
  useEffect(() => {
    getListBS()
      .then((data) => {
        setBloodsugars(data)
      })
      .catch((err) => {
        console.error(err)
        throw err
      })
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
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
