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
    const [renderedList, setRenderedList] = useState<ServerData[]>([] as ServerData[])
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        getCountries()
    },[])

    const getCountries = () => {
        api
        .get('/all?fields=name,population,region,capital,flags,subregion,languages,currencies,borders,tld')
        .then((res: ServerResponse) => {
            setCountries(res.data)
            setRenderedList(res.data)
            setLoading(false)
           })
        .catch(err => {
           setErrorMessage(err.message)
           setLoading(false)
        })
    }

    const handleFilterByName = () => {
        setLoading(true)
        let countryObject = countries.filter(country => {
            return country.name.common.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase().trim())
        } )
        if(countryObject.length === 0) {
            setErrorMessage("País não encontrado")
        } else {
            setRenderedList(countryObject)
        }
        setLoading(false)
    }

    const handleFilterByRegion = (region: string) => {
        switch (region) {

            case 'Todos':
                setRenderedList(countries)
                break;
            
            case 'Africa':
                setRenderedList(countries.filter(country => country.region === region))
                break;

            case 'Americas':
                setRenderedList(countries.filter(country => country.region === region))
                break
            
            case 'Oceania':
                setRenderedList(countries.filter(country => country.region === region))
                break

            case 'Europe':
                setRenderedList(countries.filter(country => country.region === region))
                break

            case 'Asia':
                setRenderedList(countries.filter(country => country.region === region))
                break
    
            default:
                break;
        }
    }
    
    return (
        <> 
            <Header />
            <InputArea handleFilterByName={handleFilterByName} inputValue={inputValue} setInputValue={setInputValue}  handleFilterByRegion={handleFilterByRegion} />
            { loading 
                ?  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
                        <CircularProgress />
                    </Box>
                :  
                (
                    errorMessage ?
                        <ErrorMessage message={errorMessage} />
                    :

                <Container>
                    {renderedList.map((country) => (
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