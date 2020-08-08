import React, { useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Home } from './components/Home'
import TopList from './Pages/TopList'
import Country from './Pages/Country'
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

  return data.length === 0 ? (
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
          <Route exact path='/:id' component={Country} />
          <Route exact path='/TopList' component={TopList} />
          <Route component={NotFound} default />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
