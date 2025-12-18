import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetails from './components/CountryDetails';

function App() {
  const [search, setSearch] = useState('');
  const [showCountry, setShowCountry] = useState([])

  useEffect(() => {
    const fetchCountries = async() => {
      try {
        await axios
          .get('https://studies.cs.helsinki.fi/restcountries/api/all')
          .then(response => {
            console.log(response.data.length)
            setShowCountry(response.data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase())))
          })
      } catch(error) {
        console.log('Error:', error.data)
      }
    }
    fetchCountries();
  }, [search])

  let content;
  if (search === '') {
    content = <p>Try searching for a country! =D</p>
  } else if (showCountry.length === 1) {
    content = <CountryDetails country={showCountry[0]}/>
  } else if (showCountry.length > 10) {
    content = <p>Too many matches</p>
  } else if (showCountry.length === 0) {
    content = <p>No countries found</p>
  } else {
    content = <p>Possible countries: {showCountry.map((countries, index) => (
      <span key={countries.cca3 + countries.ccn3}>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          setSearch(countries.name.common);
        }}>
          {countries.name.common}
        </a>
        {index < showCountry.length - 1 && ', '}
      </span>
    ))}</p>
  }
  
  return (
    <>
      <h1>Data From Countries</h1>
      <label>Search: 
        <input onChange={(event) => setSearch(event.target.value)} value={search}/>
      </label>
      {content}
    </>
    
  )
}

export default App;