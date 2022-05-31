import styled from 'styled-components'

// export const Container = styled.main`
//     display: flex;
//     flex-wrap: wrap;
//     margin: auto;
//     padding: 30px;
// `

export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 300px));
   
    margin: auto;
    padding: 30px;
`

