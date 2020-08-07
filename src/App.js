import React, { useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Home } from './components/Home'
import TopList from './Pages/TopList'
import { NotFound } from './Pages/NotFound'
import { Loading } from './Pages/Loading'
import { GlobalStyle } from './GlobalStyles'
import { ThemeProvider } from './components/ThemeContext'
import getData from './utils/getData'

const App = () => {
  const API = 'http://localhost:3000/data'
  const [data, setData] = useState([])

  useEffect(() => {
    getData(API)
      .then(data => setData(data))
  }, [])

  // const numberList = data.countries(item => Number(item.Population))
  // if (numberList.length > 10) {
  //   numberList.length = 10
  // }
  // const numberList = filter.map(item => Number(item.Population))
  // const nameList = data.countries(item => item.countryName)
  // if (nameList.length > 10) {
  //   nameList.length = 10
  // }
  // console.log(nameList)

  // if (numberList.length > 10) {
  //   numberList.length = 10
  // }

  console.log(data[1])
  return data.length === 2 ? (
    <>
      <GlobalStyle />
      <Loading />
    </>
  ) : (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/TopList' component={TopList} item={data[1]} />
          <Route component={NotFound} default />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
