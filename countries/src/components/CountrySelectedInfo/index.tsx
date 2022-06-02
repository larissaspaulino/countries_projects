import { Borders, Container, Text } from "./style"

import { ServerData } from "../../types"

export const CountrySelectedInfo = ({ name, population, capital, region, subregion, tld, currencies, languages, borders }: ServerData) => {
    return (
        <Container>
        <h2>{name.common}</h2>
        <Text>
            <div>
                
                <p><b>Native Name: </b>{name.nativeName[Object.keys(name.nativeName)[0]].common}</p>
                <p><b>Population: </b>{population}</p> 
                <p><b>Region: </b>{region}</p> 
                <p><b>Sub Region: </b>{subregion}</p> 
                <p><b>Capital: </b>{capital}</p> 
            </div>
            <div>
                <p><b>Top Level Domain: </b>{tld.join(', ')}</p> 
                <p><b>Currencies: </b>{Object.keys(currencies).join(', ')}</p> 
                <p><b>Languages: </b>{Object.values(languages).join(', ')}</p> 
            </div>

        </Text>
        <Borders>
            Border Countries: 
            {borders.map((border) => (
                <button key={border}>{border}</button>
            ))}
        </Borders>
        </Container>
    )
}