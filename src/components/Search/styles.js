import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const InputSearch = styled.input`
  width: 334px;
  height: 35px;
  border-radius: 6px;
  border: 2px solid #88b945;
  background-color: #ffffff;
  border-left: 8px solid #88b945;
  border-right: 8px solid #88b945;
  margin: 30px 0px 0px;
  text-align:center;
  ::placeholder{
    letter-spacing: 4px;
    font-size: 16px;
    color: #363636;
    opacity: .3;
    text-transform: uppercase;
    text-align: center;
    }
  :focus{
    outline: none;
    opacity: .6;
    padding: 0px 15px;
  }
`
export const Liststyle = styled.ul`
  width: 100%;
  height: 200px;
  overflow: scroll;
  text-align: center;
  margin: 40px 0px;
  color: #ababab;
`
export const ContentSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const ListItem = styled.h1`
  font-weight: 400;
  font-weight: 400;
  color: #ababab;
  text-align: center;
`
export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #ababab;
  :visited{
  color: #ababab;
  }
`
