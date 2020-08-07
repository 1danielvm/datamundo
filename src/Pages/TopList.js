import React from 'react'
import { Logo } from '../components/Logo'
import { Line } from './styled'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Top 10 de los paises con más población',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: [
        'rgba(81, 30, 114, 0.6)',
        'rgba(38, 165, 152, 0.6)',
        'rgba(242, 190, 33, 0.6)',
        'rgba(242, 150, 38, 0.6)',
        'rgba(242, 75, 60, 0.6)',
        'rgba(81, 30, 114, 0.6)',
        'rgba(38, 165, 152, 0.6)',
        'rgba(242, 190, 33, 0.6)',
        'rgba(242, 150, 38, 0.6)',
        'rgba(242, 75, 60, 0.6)'
      ]
    }
  ]
}

export const TopList = (item) => {
  // {data.map(item => (
  //   numberList = Number(item.Population)
  //   if (numberList.length > 10) {
  //     numberList.length = 10
  //   }
  //   nameList = item.countryName
  //   if (nameList.length > 10) {
  //     nameList.length = 10
  //   }
  // ))}
  console.log(item)
  return (
    <>
      <Logo />
      <Line />
      <Bar data={data} options={{}} />
    </>
  )
}

export default TopList
