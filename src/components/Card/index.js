import React from 'react'
import { Link } from 'react-router-dom'
import {
  Image,
  Line,
  Text,
  Title,
  Content,
  Contentdos,
  Titledos,
  Container,
  Encabezado,
  Button,
  Contentbuttons,
  Search
} from './styles'

import imgPoblacion from '../../images/poblacion.png'
import imgCambioAnual from '../../images/cambioAnual.png'
import imgCambioNeto from '../../images/cambioNeto.png'
import imgDensidad from '../../images/densidadPop.png'
import imgAreaTierra from '../../images/areaTierra.png'
import imgMigrantes from '../../images/migracion.png'
import imgFertilidad from '../../images/fertilidad.png'
import imgEdadMedia from '../../images/edadMedia.png'
import imgPopUrbano from '../../images/popUrbano.png'

export function Card () {
  return (
    <>
      <Contentbuttons>
        <Link to='/TopList'>
          <Button>TOP 10</Button>
        </Link>
        <Search placeholder='busca un país' />
      </Contentbuttons>
      <Container>
        <Encabezado> Tipos de datos</Encabezado>
        <Content>
          <Image alt='imagen del planeta tierra' src={imgPoblacion} />
          <div>
            <Title>Población</Title>
            <Text>Será el primer dato que verás, identificado con este ícono, se refiere a la cantidad de personas que habitan el país seleccionado</Text>
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <Titledos>Cambio Anual</Titledos>
            <Text>Es el crecimiento porcentualmente poblacional en el país</Text>
          </div>
          <Image alt='imagen del planeta tierra' src={imgCambioAnual} />
        </Contentdos>
        <Line />
        <Content>
          <Image alt='imagen del planeta tierra' src={imgCambioNeto} />
          <div>
            <Title>Cambio neto</Title>
            <Text>Cifra neta de crecimiento de población anual en el país</Text>
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <Titledos>Densidad poblacional</Titledos>
            <Text>Cantidad de terreno por persona disponible según area territorial del país</Text>
          </div>
          <Image alt='imagen del planeta tierra' src={imgDensidad} />
        </Contentdos>
        <Line />
        <Content>
          <Image alt='imagen del planeta tierra' src={imgAreaTierra} />
          <div>
            <Title>Área Territorial</Title>
            <Text>Extensión de tierra soberana de un país</Text>
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <Titledos>Migrantes</Titledos>
            <Text>Personas extrageras radicadas en el país registradas en el año</Text>
          </div>
          <Image alt='imagen del planeta tierra' src={imgMigrantes} />
        </Contentdos>
        <Line />
        <Content>
          <Image alt='imagen del planeta tierra' src={imgFertilidad} />
          <div>
            <Title>Fertilidad</Title>
            <Text>Cantidad de embarazos registrados</Text>
          </div>
        </Content>
        <Line />
        <Contentdos>
          <div>
            <Titledos>Edad Media</Titledos>
            <Text>Edad promedio entre toda la población</Text>
          </div>
          <Image alt='imagen del planeta tierra' src={imgEdadMedia} />
        </Contentdos>
        <Line />
        <Content>
          <Image alt='imagen del planeta tierra' src={imgPopUrbano} />
          <div>
            <Title>Población urbana</Title>
            <Text>Número de personas viviendo en zonas urbanas, ciudades y/o metrópolis</Text>
          </div>
        </Content>
      </Container>
    </>
  )
}
