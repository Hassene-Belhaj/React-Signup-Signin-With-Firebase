import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCheck , AiFillInfoCircle , AiOutlineFieldTime , AiOutlineClose, AiFillCheckCircle, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { styled } from 'styled-components';
import GoogleButton from 'react-google-button'
import { useContextAuth } from '../ContextAuth/ContextAuth';
import { Link } from 'react-router-dom';


const Section = styled.div`
display: flex;
justify-content: center;
margin: 5rem auto;
`



const Error = styled.p`
padding-left: .8rem;
`

const Title = styled.h2`
padding: 1rem;
font-weight: 500;
`

const Form = styled.form`
width: 400px;
height: auto;
display: flex;
flex-direction: column;
background-color: #f3f5f9;
border-radius: 5px;
`

const Label = styled.label`
padding-top :1rem ;
margin: .5rem 1rem;
`
const InputDiv=styled.div`
position: relative;
`
const IconShowPwd = styled(AiFillEye)`
position: absolute;
right: 2rem;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
`

const IconHidePwd = styled(AiFillEyeInvisible)`
position: absolute;
right: 2rem;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
`

const Input = styled.input`
padding: .5rem;
margin: 0 1rem;
width: 90%;
border-radius: 5px;
outline: none;
border: .5px solid rgba(0,0,0,0.2);
`
const Button = styled.button`
width: 90%;
margin-top: 2rem;
margin-bottom: 1rem;
margin-left: auto;
margin-right: auto;
padding: .8rem;
background-color: #fff;
font-weight: 500;
border-radius: 5px;
border: .5px solid rgba(0,0,0,0.2);
cursor: pointer;
`


const ErrorDiv = styled.div`
width: 90%;
padding: 1rem;
height: auto;
display: ${({$display})=>$display ? 'flex' : 'none'};
color: #fff;
background-color: black;
margin: .5rem auto;
border-radius: 5px;
font-size: .8rem;
`
const Text = styled.p``

const FlexDiv = styled.div`
display: flex;
align-items: baseline;
`


const SignIn = () => {
    const userRef = useRef()
    const errRef = useRef()

    const {email , setEmail , setEmailFocus,pwd , setPwd , setPwdFocus ,showPwd ,setShowPwd ,errorMsg , setErrorMsg , handleSignIn }  = useContextAuth()

     
    
   

    // console.log(userRef);
    // console.log(userFocus);

    
    const handleShow = () => {
        setShowPwd(!showPwd) 
    
    }

 
useEffect(()=>{
  userRef.current.focus() ;
},[])




useEffect(()=>{
setErrorMsg('')
},[email, pwd ])

  return (
    <Section>
        <Form onSubmit={handleSignIn}>
            <Title>Sign in</Title>
               {/* <Error ref={errRef} $display={errorMsg ? 1 : 0} aria-live="assertive">{errorMsg}</Error> */}

               <FlexDiv>
                <Label>Email Address</Label> 
                {/* <AiOutlineCheck style={{display : validEmail && !errorMsg ?  'block' : 'none'}} color='green' size={15}  /> 
                <AiOutlineClose style={{display : !errorMsg ? 'none' : 'block' }} color='red' size={15}  />  */}
            </FlexDiv>   
            <InputDiv>
            <Input
                ref={userRef}
                autoComplete='off'
                // aria-invalid='true'
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                onFocus={()=>setEmailFocus(true)}
                onBlur={()=>setEmailFocus(false)}
                />
              
             </InputDiv>
            <ErrorDiv ref={errRef} $display={errorMsg && errorMsg !== 'wrong-password' ? 1 : 0}>
                <Error  aria-live="assertive">
                  {errorMsg}
                </Error>
             </ErrorDiv>

          


             <FlexDiv>
              <Label>Password</Label> 
                {/* <AiOutlineCheck style={{display : errorMsg?  'block' : 'none'}} color='green' size={15}  /> 
                <AiOutlineClose style={{display : errorMsg ? 'none' : 'block' }} color='red' size={15}  />  */}
            </FlexDiv> 

            <InputDiv>
                  <Input
                    ref={userRef}
                    type={showPwd ? 'text' : 'password'}
                    value={pwd}
                    autoComplete='off'
                    onChange={(e)=>setPwd(e.target.value)}
                    onFocus={()=>setPwdFocus(true)}
                    onBlur={()=>setPwdFocus(false)}                  
                  />
                   {pwd ? <IconShowPwd style={{display :  showPwd ? 'none' : 'block' }} onClick={handleShow} size={20}/> : null}            
                   {pwd ? <IconHidePwd style={{display :  showPwd ? 'block' : 'none' }} onClick={handleShow} size={20}/> : null}  
             </InputDiv>
             <ErrorDiv ref={errRef} $display={errorMsg === 'wrong-password' ? 1 : 0}>
                <Error  aria-live="assertive">
                  {errorMsg}
                </Error>
             </ErrorDiv>


         
            <Button>Login</Button>

             <Text style={{textAlign:'center'}}> or </Text>
              
            <GoogleButton style={{width:'90%',margin:'auto',marginBottom:'2rem',marginTop:'1rem',borderRadius:'2px'}} />

             <Link to={'/signup'}  style={{color:'#000'}}>
                <Text style={{textAlign:'center',paddingBottom:'2rem',fontSize:'.8rem'}}> Create an account </Text>
             </Link>
           

        </Form>
     </Section>
  )
}

export default SignIn