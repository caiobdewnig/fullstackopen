export default function CountryDetails({country}) {
    return(
        <>
            <h2>{country.name.common}</h2>
            <h3>(Official Name: {country.name.official})</h3>
            <h4>Area: {country.area} m²</h4>
            <h4>Population: {country.population} people</h4>
            <h4>Capital(s):</h4>
            <ul>
                 {country.capital.map(capitals => 
                    <li key={country.ccn3}>
                       {capitals} 
                    </li>
                 )}
            </ul>
            <h4>Languages:</h4>
            <ul>
                {Object.values(country.languages).map(languages => 
                    <li key={country.cca3}>{languages}</li>
                )}
            </ul>

            <h4>Flag:</h4>
            <img src={country.flags.png}/>
        </>
    )
}