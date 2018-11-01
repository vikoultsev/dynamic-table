import React from 'react'
import { Pie } from 'react-chartjs-2'


export default function LineChart({ data }) {
  return (
    <Pie
      data={data}
      width={100}
      options={{
        maintainAspectRatio: false,
      }}
    />
  )
}
