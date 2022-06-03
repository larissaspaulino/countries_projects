import { GlobalStyle } from './styles/globalStyle'
import { Routes } from './routes'
import { ServerData } from './types'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

function App() {

  const [countries, setCountries] = useState<ServerData[]>([] as ServerData[])
  
  return (
    <>
      <Routes setCountries={setCountries} countries={countries} />
      <GlobalStyle />
    </>
  )
}

export default App
