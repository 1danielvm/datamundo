import React from 'react'
import { Liststyle, ListItem, Link, InputSearch, ContentSearch } from './styles'

class CountriesItem extends React.Component {
  render () {
    return (
      <ListItem>{this.props.item.countryName}</ListItem>
    )
  }
}

function useSearchCounrties (countries) {
  const [query, setQuery] = React.useState('')

  const [filteredCountries, setFilteredBadges] = React.useState(countries)
  React.useMemo(() => {
    const result = countries.filter(item => {
      return `${item.countryName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [countries, query])

  return { query, setQuery, filteredCountries }
}

function CountriesList (props) {
  const countries = props.data
  const { query, setQuery, filteredCountries } = useSearchCounrties(countries)

  if (filteredCountries.length === 0) {
    return (
      <ContentSearch>
        <div>
          <InputSearch
            type='text'
            value={query}
            placeholder='Busca un país'
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <ListItem>País no encontrado</ListItem>
      </ContentSearch>
    )
  }

  return (
    <ContentSearch>
      <div>
        <InputSearch
          type='text'
          value={query}
          placeholder='Busca un país'
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <Liststyle>
        {filteredCountries.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/country/${item.id}`}>
                <CountriesItem item={item} />
              </Link>
            </li>
          )
        })}
      </Liststyle>
    </ContentSearch>
  )
}

export default CountriesList
