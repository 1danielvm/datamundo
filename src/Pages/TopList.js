import React, { useEffect, useState } from 'react'
import {
  Line,
  Title2,
  Container,
  Title3,
  Conteo,
  Back,
  Image
} from './styled'
import { Doughnut } from 'react-chartjs-2'
import { GlobalStyle } from '../GlobalStyles'
import { Loading } from './Loading'
import imgPoblacion from '../images/poblacion.png'
import CountUp from 'react-countup'
import getData from '../utils/getData'

export const TopList = () => {
  const API = 'http://localhost:3000/data'
  const [data, setData] = useState([])
  useEffect(() => {
    getData(API)
      .then(data => setData(data))
  }, [])
  function filtrarTopPorID (obj) {
    if ((obj.id) <= 10) {
      return true
    } else {
      return false
    }
  }

  const arrPorID = data.filter(filtrarTopPorID)
  const dataChart = {
    labels: arrPorID.map(item => item.countryName),
    datasets: [
      {
        label: 'Top 10 de los paises con más población',
        data: arrPorID.map(item => Number(item.Population)),
        fill: true,
        backgroundColor: [
          'rgba(81, 30, 114, 0.6)',
          'rgba(38, 165, 152, 0.6)',
          'rgba(242, 190, 33, 0.6)',
          'rgba(242, 150, 38, 0.6)',
          'rgba(242, 75, 60, 0.6)',
          'rgba(48, 138, 89, 0.6)',
          'rgba(64, 214, 133, 0.6)',
          'rgba(214, 114, 54, 0.6)',
          'rgba(21, 73, 138, 0.6)',
          'rgba(43, 120, 214, 0.6)'
        ]
      }
    ]
  }
  return data.length === 0 ? (
    <>
      <GlobalStyle />
      <Loading />
    </>
  ) : (
    <>
      <Line />
      <Back onClick={() => window.history.go(-1)}>Atrás</Back>
      <Title2>Top 10</Title2>
      <Doughnut data={dataChart} options={{}} />
      <Container>
        {arrPorID.map(item => (
          <div key={item.id}>
            <Title3>{item.countryName}</Title3>
            <CountUp
              start={999999999}
              end={Number(item.Population)}
              separator='.'
              duration={2}
              delay={0}
            >
              {({ countUpRef }) => (
                <div>
                  <Image alt='imagen de poblacion mundial' src={imgPoblacion} />
                  <Conteo ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <Line />
          </div>
        ))}
      </Container>
    </>
  )
}

export default TopList
