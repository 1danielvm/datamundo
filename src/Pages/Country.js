import React, { useEffect, useState } from 'react'
import { Line, Title2, Container, ConteoInfo, TitleInfo, TitleInfodos, Content, Contentdos, ImageInfo, Back } from './styled'
import imgPoblacion from '../images/poblacion.png'
import imgCambioAnual from '../images/cambioAnual.png'
import imgCambioNeto from '../images/cambioNeto.png'
import imgDensidad from '../images/densidadPop.png'
import imgAreaTierra from '../images/areaTierra.png'
import imgMigrantes from '../images/migracion.png'
import imgFertilidad from '../images/fertilidad.png'
import imgEdadMedia from '../images/edadMedia.png'
import imgPopUrbano from '../images/popUrbano.png'
import { Doughnut } from 'react-chartjs-2'
import { GlobalStyle } from '../GlobalStyles'
import { Loading } from './Loading'
import CountUp from 'react-countup'
import getData from '../utils/getData'

export const Country = ({ countryId }) => {
  const API = 'http://localhost:3000/data'
  const [data, setData] = useState([])
  const obtenerIdPorURL = Number(countryId)

  useEffect(() => {
    getData(API)
      .then(data => setData(data))
  }, [])
  function filtrarTopPorID (obj) {
    if ((obj.id) === obtenerIdPorURL) {
      return true
    } else {
      return false
    }
  }
  const arrPorID = data.filter(filtrarTopPorID)
  const dataChart = {
    labels: ['Población mundial', 'Poblacion país'],
    datasets: [
      {
        label: 'Comparación a nivel mundial',
        data: [(7801915909 - arrPorID.map(item => Number(item.Population))), arrPorID.map(item => Number(item.Population))],
        fill: true,
        backgroundColor: [
          'rgba(54, 54, 54, 0.3)',
          'rgba(242, 150, 38, 0.9)'
        ]
      }
    ]
  }
  console.log(dataChart)
  return data.length === 0 ? (
    <>
      <GlobalStyle />
      <Loading />
    </>
  ) : (
    <>
      <Line />
      <Back onClick={() => window.history.go(-1)}>Atrás</Back>
      {arrPorID.map(item => (
        <Title2 key={item.id}>{item.countryName}</Title2>
      ))}
      <Doughnut data={dataChart} options={{}} />
      <Container>
        <Content>
          <ImageInfo alt='imagen del planeta tierra' src={imgPoblacion} />
          <div>
            <TitleInfo>Población</TitleInfo>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={9999999}
                  end={Number(item.Population)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <TitleInfodos>Cambio Anual</TitleInfodos>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={5}
                  end={Number(item.yearlyChange)}
                  separator='.'
                  duration={2}
                  decimals={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
          <ImageInfo alt='imagen del planeta tierra' src={imgCambioAnual} />
        </Contentdos>
        <Line />
        <Content>
          <ImageInfo alt='imagen del planeta tierra' src={imgCambioNeto} />
          <div>
            <TitleInfo>Cambio neto</TitleInfo>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={9999999}
                  end={Number(item.Population)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <TitleInfodos>Densidad poblacional</TitleInfodos>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={5}
                  end={Number(item.density)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
          <ImageInfo alt='imagen del planeta tierra' src={imgDensidad} />
        </Contentdos>
        <Line />
        <Content>
          <ImageInfo alt='imagen del planeta tierra' src={imgAreaTierra} />
          <div>
            <TitleInfo>Área Territorial</TitleInfo>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={9999999}
                  end={Number(item.landArea)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <TitleInfodos>Migrantes</TitleInfodos>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={5}
                  end={Number(item.migrants)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
          <ImageInfo alt='imagen del planeta tierra' src={imgMigrantes} />
        </Contentdos>
        <Line />
        <Content>
          <ImageInfo alt='imagen del planeta tierra' src={imgFertilidad} />
          <div>
            <TitleInfo>Fertilidad</TitleInfo>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={99}
                  end={Number(item.fertility)}
                  separator='.'
                  duration={2}
                  decimals={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <TitleInfodos>Edad Media</TitleInfodos>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={5}
                  end={Number(item.medAge)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
          <ImageInfo alt='imagen del planeta tierra' src={imgEdadMedia} />
        </Contentdos>
        <Line />
        <Content>
          <ImageInfo alt='imagen del planeta tierra' src={imgPopUrbano} />
          <div>
            <TitleInfodos>Población urbana</TitleInfodos>
            {arrPorID.map(item => (
              <div key={item.id}>
                <CountUp
                  start={5}
                  end={Number(item.urbanPop)}
                  separator='.'
                  duration={2}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <div>
                      <ConteoInfo ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
        </Content>
      </Container>
    </>
  )
}

export default Country
