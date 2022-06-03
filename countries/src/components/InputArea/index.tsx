import { Container, InputContainer, Select } from "./style"

import { FaSearch } from "react-icons/fa"
import { InputAreaProps } from "../../types"

export const InputArea = ({ inputValue, setInputValue, handleFilterByName, handleFilterByRegion }: InputAreaProps) => {

  
    
    return (
        <Container>
            <InputContainer>
                <input placeholder="Search for a country" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <FaSearch onClick={handleFilterByName} />
            </InputContainer>
            <Select onChange={(e) => handleFilterByRegion(e.target.value)}>
                <option value='Todos'>All region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </Select>
        </Container>
    )
}