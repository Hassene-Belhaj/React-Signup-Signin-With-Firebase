import React from 'react'
import { GlobalStyle } from './global'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Components/Home'
import ContextAuth from './ContextAuth/ContextAuth'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
       <ContextAuth>
            <Routes>
            <Route excat path={'/'} element={ <Home />} />
            <Route excat path={'/signup'} element={ <SignUp />} />
            <Route excat path={'/signin'} element={ <SignIn/>} />  
        </Routes>
       </ContextAuth>
    </Router>
    </>
  )
}

export default App