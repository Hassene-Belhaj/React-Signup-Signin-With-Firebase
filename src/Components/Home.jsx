import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const Container = styled.div`
text-align: center;
`
const LinksDiv = styled.div`
padding: 1rem 0;
`
const Title = styled.h3``


const Home = () => {
  return (
    <Container>  
        <Title>Home</Title>
        <LinksDiv>
         <Link to={'/signin'} style={{marginRight:'1rem'}}>Sign In</Link>
         <Link to={'/signup'}>Sign up</Link>

        </LinksDiv>
    </Container>
  )
}

export default Home