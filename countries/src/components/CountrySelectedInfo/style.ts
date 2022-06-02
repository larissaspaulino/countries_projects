import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
    margin-top: 30px;
    
    @media screen and (min-width: 1024px) {
        padding: 40px;
        max-width: 40vw;
        
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 20px 0;
    justify-content: space-between;

    p {
        margin: 10px 0 ;
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        
    }
`

export const Borders = styled.div`
    button {
        background-color: #FFF;
        border: none;
        border-radius: 3px;
        padding: 2px 6px;
        margin-left: 10px;
    }
`