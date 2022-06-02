import { Container, InputContainer, Select } from "./style"

import { FaSearch } from "react-icons/fa"
import { InputAreaProps } from "../../types"

export const InputArea = ({ inputValue, setInputValue, handleFilterByName }: InputAreaProps) => {

  
    
    return (
        <Container>
            <InputContainer>
                <input placeholder="Search for a country" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <FaSearch onClick={handleFilterByName} />
            </InputContainer>
            <Select>
                <option value='' disabled selected hidden>Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </Select>
        </Container>
    )
}