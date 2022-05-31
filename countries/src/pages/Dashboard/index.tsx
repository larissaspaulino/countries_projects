import { useEffect, useState } from "react"

import { Card } from "../../components/Card"
import { Container } from "./style"
import { Header } from "../../components/Header"
import { api } from "../../services/api"

type ServerResponse = {
    data: ServerData[]
}

type ServerData = {
    name: name
    capital: string
    region: string
    population: number
    flags: flags
}

type flags = {
    svg: string
    png: string
}

type name = {
    common:string
    official: string
    nativeName: nativeName
}

type nativeName = {
    por: por
}

type por = {
    official: string
    common: string
}

export const Dashboard = () => {

    const [countries, setCountries] = useState<ServerData[]>([] as ServerData[])

    useEffect(() => {
        api
         .get('/all?fields=name,population,region,capital,flags')
         .then((res: ServerResponse) => setCountries(res.data))
         .catch(err => console.log(err))
    },[])
    
    return (
        <>
            <Header />
            <Container>
                {countries && countries.map((country) => (
                    <Card 
                        svg={country.flags.svg} 
                        name={country.name.common} 
                        population={country.population} 
                        capital={country.capital} 
                        region={country.region} />
                        ))}
            </Container>
        </>
    )
}