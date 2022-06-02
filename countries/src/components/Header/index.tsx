import { DarkModeDiv, HeaderStyled } from './style'

import { FaMoon } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    
    return (
        <HeaderStyled>
            <h3 onClick={() => navigate('/')}>Where in the world?</h3>
            <DarkModeDiv>
                <FaMoon size='18' />
                Dark Mode
            </DarkModeDiv>
        </HeaderStyled>
    )
}