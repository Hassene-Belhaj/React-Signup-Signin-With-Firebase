import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useContextAuth } from '../ContextAuth/ContextAuth'
import { updateCurrentUser } from 'firebase/auth'


const Container = styled.div`
padding: 5rem 0;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`
const LinksDiv = styled.div`
padding: 1rem 0;
`
const Title = styled.h3`
padding: 2rem 0;
`
const Img = styled.img`
border-radius: 50%;
`
const Info = styled.div`
padding: 2rem 0;
`
const Text = styled.p`
margin: 1rem 0;
`

const Home = () => {

 const {currentUser,LogOut} =  useContextAuth()

  return (
    <Container>  
        <LinksDiv>
        {!currentUser?.email ?
         <>
         <Link to={'/signin'} style={{marginRight:'1rem'}}>Sign In</Link>
         <Link to={'/signup'}>Sign up</Link>
         </> 
         : 
          <Info>
              <Link to={'/'} onClick={LogOut}>Log out</Link>
              <Text> {currentUser?.displayName}</Text>
              <Text> {currentUser?.email}</Text>
             {!currentUser?.photoURL ? '' : <Img src={currentUser?.photoURL} referrerPolicy='no-referrer' alt="profil image" />} 
          </Info>
         }
         

        </LinksDiv>
    </Container>
  )
}

export default Home