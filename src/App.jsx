import React from 'react'
import { GlobalStyle } from './global'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <SignUp />
    <SignIn />
    </>
  )
}

export default App