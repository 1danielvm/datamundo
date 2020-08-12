import React from 'react'
import { Image, Container, Content, Title, Texto, Line, Text } from './styles'
import CountUp from 'react-countup'
import imgMundo from '../../images/imagen-mundo.png'

export const Hero = () => {
  return (
    <>
      <div>
        <Line />
        <Text>En este website encontrarás datos sobre la población mundial, pero antes una breve explicación !</Text>
      </div>
      <Container>
        <Image alt='imagen del planeta tierra' src={imgMundo} />
        <Content>
          <CountUp
            start={7801914859}
            end={7801915909}
            separator='.'
            duration={3}
            delay={0}
          >
            {({ countUpRef }) => (
              <div>
                <Title ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <Texto>Aunque cueste creelo, ese es el número de personas que vivimos en el planeta Tierra!</Texto>
        </Content>
      </Container>
    </>
  )
}
