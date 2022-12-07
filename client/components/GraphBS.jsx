import React, { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getListBS } from '../apis/apiClient'

export default function GraphBS() {
  const [bloodsugars, setBloodsugars] = useState([])
  useEffect(() => {
    getListBS()
      .then((data) => {
        const refinedBS = data.map((raw) => ({
          measure_datetime: new Date(raw.measure_datetime).toLocaleString(
            'en-nz'
          ),
          value: raw.bs_value,
        }))
        setBloodsugars(refinedBS)
      })
      .catch((err) => {
        console.error(err)
        throw err
      })
  }, [])

  return (
    <>
      <BarChart
        width={1000}
        height={500}
        barGap={2}
        barSize={6}
        data={bloodsugars}
        margin={{ top: 20, right: 60, bottom: 0, left: 20 }}
      >
        <XAxis dataKey="measure_datetime" />
        <YAxis tickCount={10} />
        <Tooltip />
        <CartesianGrid />
        <Bar dataKey="value" fill="#ff7300" radius={[5, 5, 5, 5]} />
        <Brush dataKey="measure_datetime" height={50} />
        <ReferenceLine type="horizontal" y={-5} stroke="#666" />
      </BarChart>
    </>
  )
}
