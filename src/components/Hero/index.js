import React from 'react'
import { Image, Container, Content, Title, Texto } from './styles'
import imgMundo from '../../images/imagen-mundo.png'

export const Hero = () => {
  return (
    <>
      <Container>
        <Image alt='imagen del planeta tierra' src={imgMundo} />
        <Content>
          <Title>7,801,915,909</Title>
          <Texto>#1 Aunque cueste creelo, es el número de personas que vivimos en la Tierra!</Texto>
        </Content>
      </Container>
    </>
  )
}
