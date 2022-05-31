import { GlobalStyle } from './styles/globalStyle'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  )
}

export default App
