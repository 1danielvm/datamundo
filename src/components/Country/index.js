import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import getData from '../../utils/getData'

const API = 'http://localhost:3000/Population'
const [data, setData] = useState([])

useEffect(() => {
  getData(API)
    .then(data => setData(data))
}, [])

export class Country extends Component {
  componentDidMount () {
    this.state.popData = {
      datasets: [{
        data: Number(data.population)
      }],
      labels: []
    }
  }

  render () {
    return (
      data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <Doughnut data={this.state.popData} />
      ))
  }
}
