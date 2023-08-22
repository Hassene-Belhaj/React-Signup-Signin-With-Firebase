import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useContextAuth } from '../ContextAuth/ContextAuth'
import { updateCurrentUser } from 'firebase/auth'


const Container = styled.div`
text-align: center;
`
const LinksDiv = styled.div`
padding: 1rem 0;
`
const Title = styled.h3`
padding: 2rem 0;
`


const Home = () => {

 const {currentUser,LogOut} =  useContextAuth()
 console.log(currentUser?.email);

  return (
    <Container>  
        <Title>Home</Title>
        <LinksDiv>
        {!currentUser?.email ? <>
         <Link to={'/signin'} style={{marginRight:'1rem'}}>Sign In</Link>
         <Link to={'/signup'}>Sign up</Link>
         </> : <Link to={'/'} onClick={LogOut}>Log out</Link>}
         

        </LinksDiv>
    </Container>
  )
}

export default Home