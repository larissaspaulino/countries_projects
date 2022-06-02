import { Box, CircularProgress } from '@mui/material';
import { RoutesProps, ServerData, ServerResponse } from "../../types"
import { useEffect, useState } from "react"

import { Card } from "../../components/Card"
import { Container } from "./style"
import { ErrorMessage } from '../../components/ErrorMessage';
import { Header } from "../../components/Header"
import { InputArea } from "../../components/InputArea"
import { api } from "../../services/api"

export const Dashboard = ({ setCountries, countries }: RoutesProps) => {

    const [loading, setLoading] = useState(true)
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        api
         .get('/all?fields=name,population,region,capital,flags,subregion,languages,currencies,borders,tld')
         .then((res: ServerResponse) => {
             setCountries(res.data)
             setLoading(false)
            })
         .catch(err => {
            setCountries(err.message)
            setLoading(false)
         })
    },[])

    const handleFilterByName = () => {
        setLoading(true)
        let countryObject = countries.filter(country => {
            return country.name.common.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().trim())
        } )
        if(countryObject.length === 0) {
            setCountries("Country not found")
        } else {
            setCountries(countryObject)
        }
        setLoading(false)
    }
    
    return (
        <> 
            <Header />
            <InputArea handleFilterByName={handleFilterByName} inputValue={inputValue} setInputValue={setInputValue}  />
            { loading 
                ?  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
                        <CircularProgress />
                    </Box>
                :  
                (
                    typeof countries === "string" ?
                        <ErrorMessage message={countries} />
                    :

                <Container>
                    {Array.isArray(countries) && countries.map((country) => (
                        <Card 
                            svg={country.flags.svg} 
                            name={country.name.common} 
                            population={country.population} 
                            capital={country.capital} 
                            key={country.name.common}
                            region={country.region} />
                            ))}
                </Container>
                )
                
            }
          
        </>
    )
}