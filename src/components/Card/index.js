import * as React from 'react'
import { Image, Line, Text } from './styles'

import imgMundo from '../../images/poblacion.png'

export function Card () {
  return (
    <>
      <div>
        <Image alt='imagen del planeta tierra' src={imgMundo} />
        <h1>Población</h1>
        <Text>Será el primer dato que verás, identificado con este ícono, se refiere a la cantidad de personas que habitan el país seleccionado</Text>
      </div>
      <Line />
    </>
  )
}
