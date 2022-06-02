import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0px 5%;

    h3 {
        font-family: 'Monospace', sans-serif;
        font-size: 16px;
    }

    @media screen and (min-width: 770px) {
        flex-direction: row
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 400px;
    height: 50px;
    background-color: #FFF;
    border-radius: 3px;
    -webkit-box-shadow: 0px 5px 15px -1px rgba(0,0,0,0.59); 
    box-shadow: 0px 5px 15px -1px rgba(0,0,0,0.59);
    margin-top:20px;
    
    input {
        height:100%;
        width:88%;
        padding-left: 25px;
        border: none;
    }

    svg {
        width: 40px;
        color: grey;
        cursor: pointer;
    }

    
`

export const Select = styled.select`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 3px;
    -webkit-box-shadow: 0px 5px 15px -1px rgba(0,0,0,0.59); 
    box-shadow: 0px 5px 15px -1px rgba(0,0,0,0.59);
    margin-top:20px;
    color: grey;
    padding-left: 12px;
    background-color: #fff;

    option {
        margin-top: 50px;
    }
    
`