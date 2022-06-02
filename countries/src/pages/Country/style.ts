import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    margin: 70px auto;

    align-items: center;
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }

    img {
        max-width: 400px;
    }
`