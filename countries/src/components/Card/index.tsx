import { CardDiv, InfoDiv } from "./style";

import { useNavigate } from 'react-router-dom'

type CardProps = {
    name: string;
    population: number
    capital: string
    region: string
    svg: string
}

export const Card = ({ name, svg, population, region, capital }: CardProps) => {

    const navigate = useNavigate()
    
    return (
        <CardDiv onClick={() => navigate(`/country/${name}`)}>
            <img src={svg} alt='flag'/>
            <InfoDiv>
                <h3>{name}</h3>
                <p>Population: {population} </p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </InfoDiv>
        </CardDiv>
    )
}
