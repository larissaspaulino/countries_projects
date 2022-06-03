import { CountryProps, ServerData } from "../../types"
import { useEffect, useState } from "react"

import { Container } from "./style"
import { CountrySelectedInfo } from "../../components/CountrySelectedInfo"
import { ErrorMessage } from "../../components/ErrorMessage"
import { Header } from "../../components/Header"
import { useParams } from "react-router-dom"

export const Country = ({ countries }: CountryProps) => {

    const [country, setCountry] = useState<ServerData | string>('')
    
    let { name } = useParams() 

    useEffect(() => {
        let countryObject = countries.find(country => country.name.common.toLocaleLowerCase().includes(name as string))
        
        if (countryObject) {
            setCountry(countryObject)
        }
        
    }, [])
    
    return (
        <>  
            <Header />
            <main>
                {country
                 ? 
                    <Container>
                        <img src={country.flags.svg} alt='flag'/>
                        <CountrySelectedInfo 
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            subregion={country.subregion}
                            capital={country.capital}
                            tld={country.tld}
                            currencies={country.currencies}
                            borders={country.borders}
                            languages={country.languages}
                        />
                    </Container>
                :
                <ErrorMessage message="País não encontrado" />
                }
               
            </main>
        </>
    )
}