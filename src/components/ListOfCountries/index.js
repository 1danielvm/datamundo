import React from 'react'
import { Home } from '../Home'
import { Logo } from '../Logo'
import { population } from '../../../db.json'

export const ListOfCountries = () => {
  return (
    <>
      <Logo />
      <ul>
        {
          population.map(population =>
            <li key={population.id}>
              <Home {...population} />
            </li>)
        }
      </ul>
    </>
  )
}
