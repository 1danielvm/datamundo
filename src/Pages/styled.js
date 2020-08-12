import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Title = styled.span`
  color: #26a1c6;
  font-size: 2.5em;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  text-align: center;
  color: #ababab;
  :visited{
  color: #ababab;
  }
`

export const TitleInfo = styled.h2`
  padding: 20px;
  color: #26a1c6;
  text-align: center;
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
`

export const TitleInfodos = styled.h2`
  padding: 20px;
  color: #85b840;
  text-align: center;
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
`

export const Title3 = styled.h1`
  text-align: center;
  font-weight: 400;
  color: #363636;
  opacity: .8;
`

export const Title2 = styled.span`
  color: #f3a03f;
  font-size: 2.5em;
  width: 100%;
  display: flex;
  height: 90px;
  text-align: center;
  justify-content: center;
  margin: 20px 0px 15px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`
export const Conteo = styled.span`
  color: #85b83e;
  font-size: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
`
export const ConteoInfo = styled.span`
  color: #363636;
  font-size: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
`
export const Back = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-size: 1.2em;
  color: #82b43c;
  margin-left: 30px;
  :hover{
    outline-color: #82b43c;
  }
`

export const Line = styled.div`
  background-color: #363636;
  height: 2px;
  width: 300px;
  margin: 0 auto;
  opacity: 0.6;
  border-radius: 10px;
  margin: 0px auto 20px;
`
export const Container = styled.div`
  box-shadow: 0 0 12px 0 rgba(0,0,0,0.15);
  background-color: #ffffff;
  width: 100%;
  overflow: scroll;
  height: 410px;
  margin: 40px 0;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 0px;
`
export const Image = styled.img`
  width: 30px;
  height: auto;
  margin-bottom: -40px;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 81px 1fr;
  padding: 20px;
  align-items: center;
  max-width: 400px;
`
export const Contentdos = styled.div`
  display: grid;
  grid-template-columns: 1fr 81px;
  padding: 20px;
  align-items: center;
  max-width: 400px;
`
export const ImageInfo = styled.img`
  width: 71px;
  height: auto;
  padding-top: 20px;
`
