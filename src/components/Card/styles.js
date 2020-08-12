import styled from 'styled-components'

export const Image = styled.img`
  width: 81px;
  height: auto;
  padding-top: 20px;
`
export const Line = styled.div`
  background-color: #363636;
  height: 2px;
  width: 300px;
  margin: 0 auto;
  opacity: 0.6;
  border-radius: 10px;
`
export const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 12px 0 rgba(0,0,0,0.15);
  background-color: #ffffff;
  width: 100%;
  overflow: scroll;
  height: 485px;
  margin: 40px 0;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 81px 1fr;
  padding: 20px;
  grid-column-gap: 20px;
  align-items: center;
  max-width: 400px;
`
export const Contentdos = styled.div`
  display: grid;
  grid-template-columns: 1fr 81px;
  padding: 20px;
  grid-column-gap: 20px;
  align-items: center;
  max-width: 400px;
`
export const Title = styled.h2`
  padding: 20px;
  color: #26a1c6;
  text-align: center;
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
`
export const Encabezado = styled.h1`
  padding: 20px;
  color: #85b840;
  text-align: center;
  font-size: 28px;
  font-family: 'Mulish', sans-serif;
  margin: 20px 0px 0px;
`

export const Titledos = styled.h2`
  padding: 20px;
  color: #85b840;
  text-align: center;
  font-size: 20px;
  font-family: 'Mulish', sans-serif;
`

export const Text = styled.p`
  color: #363636;
  text-align: center;
  font-size: 16px;
`

export const Button = styled.button`
  width: 334px;
  height: 48px;
  border-radius: 6px;
  border: solid 2px #88b945;
  background-color: #ffffff;
  letter-spacing: 4px;
  font-size: 16px;
  color: #88b945;
  border-bottom: 6px solid #88b945; 
  margin-top: 40px;
  :focus{
    outline: none;
    opacity: .6;
    padding: 0px 10px;
  }
`

export const Contentbuttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
