import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import { Home } from './components/Home'
import { Logo } from './components/Logo'
import TopList from './Pages/TopList'
import { NotFound } from './Pages/NotFound'
import { Country } from './Pages/Country'

import { GlobalStyle } from './GlobalStyles'

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Country path='country/:countryId' />
        <TopList path='/TopList' />
      </Router>
    </Suspense>
  )
}
export default App
