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
        <CardDiv onClick={() => navigate(`/country/${name.toLocaleLowerCase()}`)}>
            <img src={svg} alt='flag'/>
            <InfoDiv>
                <div>
                    <h3>{name}</h3>
                    <p>Population: {population} </p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </InfoDiv>
        </CardDiv>
    )
}
