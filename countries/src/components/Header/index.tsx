import { DarkModeDiv, HeaderStyled } from './style'

import { FaMoon } from 'react-icons/fa'

export const Header = () => {
    return (
        <HeaderStyled>
            <h3>Where in the world?</h3>
            <DarkModeDiv>
                <FaMoon size='18' />
                Dark Mode
            </DarkModeDiv>
        </HeaderStyled>
    )
}