import styled from 'styled-components'

// export const Container = styled.main`
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     margin: auto;
//     gap: 50px;
// /* 
//     > :last-child {
//         margin-right: auto;
//     } */
// `

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 300px));  
    justify-content:space-around;
    justify-items: center;
    margin: auto;
`

