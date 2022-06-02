import styled from 'styled-components'

export const CardDiv = styled.div`
    width: 200px;
    height: 280px;
    background-color: #fff;
    margin-top: 40px;

    img {
        width: 100%;
        height: 133.3px;
        object-fit: cover;
    }

    :hover {
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 1px 16px 9px -7px rgba(0,0,0,0.43); 
        box-shadow: 0px 10px 13px -7px #000000, 1px 16px 9px -7px rgba(0,0,0,0.43);
        cursor: pointer;
    }
`

export const InfoDiv = styled.div`

    display:flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 133.3px);
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 70%;
        max-width: 78%;
        font-size: 14px; 
}
`
