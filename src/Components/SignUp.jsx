import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCheck , AiFillInfoCircle , AiOutlineFieldTime , AiOutlineClose, AiFillCheckCircle, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { useContextAuth } from '../ContextAuth/ContextAuth';


const Section = styled.div`
display: flex;
justify-content: center;
margin: 5rem auto;
`



const Error = styled.p`
padding-left: .8rem;
text-align: center;
`

const Title = styled.h2`
padding: 1rem;
font-weight: 500;
`

const Form = styled.form`
width: 500px;
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
margin: 2rem 1rem;
padding: .8rem;
background-color: #fff;
font-weight: 500;
border-radius: 5px;
border: .5px solid rgba(0,0,0,0.2);
cursor: pointer;
/* background-color: indigo;
color: #fff;
transition: all .3s ease-in-out;
&:hover{
 opacity : 0.9 ;
} */
`
const InfoIcon = styled(AiFillInfoCircle)`
width: 3rem;
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
const Span = styled.span``

const FlexDiv = styled.div`
display: flex;
align-items: baseline;
`


const SignUp = () => {


    const {email , setEmail , validEmail , setValidEmail ,emailFocus , setEmailFocus ,user , setUser,validName , setValidName , userFocus , setUserFocus ,pwd , setPwd ,validPwd , setValidPwd , pwdFocus , setPwdFocus ,matchPwd , setMatchPwd , validMatch , setValidMatch ,matchFocus , setMatchFocus ,showPwd , setShowPwd ,showMatchPwd , setShowMatchPwd ,errorMsg , setErrorMsg , handleSignUp , succes}  = useContextAuth()
    
  
  console.log(errorMsg);
  
    const userRef = useRef()
    const errRef = useRef()


    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
     
    

    // console.log(userRef);
    // console.log(userFocus);

    const navigate = useNavigate()

    
    const handleShow = () => {
        setShowPwd(!showPwd) 
     
    }

    const handleShowMatch = () => {
    setShowMatchPwd(!showMatchPwd)  
    }

useEffect(()=>{
  userRef.current.focus() ;
},[])

useEffect(()=>{
setValidName(USER_REGEX.test(user))
console.log(validName);
},[user])

useEffect(()=>{
  setValidEmail(EMAIL_REGEX.test(email))
  console.log(validEmail);
  },[email])


useEffect(() => {
  setValidPwd(PWD_REGEX.test(pwd));
  setValidMatch(pwd === matchPwd);
  console.log(validPwd);
}, [pwd, matchPwd])


useEffect(()=>{
setErrorMsg('')
},[email ,user , pwd , matchPwd])

useEffect(()=>{
if(succes) { 
  setEmail('')
  setUser('')
  setPwd('')
  setMatchPwd('')
} 
},[])

  return (
    <Section>
        <Form onSubmit={handleSignUp} >
            <Title>Sign Up</Title>
               {/* <Error ref={errRef} $display={errorMsg ? 1 : 0} aria-live="assertive">{errorMsg}</Error> */}
               <FlexDiv>
                <Label>Email Address</Label> 
                <AiOutlineCheck style={{display : validEmail && !errorMsg ?  'block' : 'none'}} color='green' size={15}  /> 
                <AiOutlineClose style={{display : !errorMsg ? 'none' : 'block' }} color='red' size={15}  /> 
            </FlexDiv>   
            <InputDiv>
            <Input
                ref={userRef}
                autoComplete='off'
                aria-invalid={validName ? "false" : "true"}
                autoCorrect='off'
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                onFocus={()=>setEmailFocus(true)}
                onBlur={()=>setEmailFocus(false)}
                
                />
              
             </InputDiv>
              {errorMsg?  <ErrorDiv ref={errRef} $display='true'>
                <Error aria-live="assertive">
                 {errorMsg}
                </Error>
             </ErrorDiv> : null}
           

            <FlexDiv>
                <Label>Username</Label> 
                <AiOutlineCheck style={{display : validName?  'block' : 'none'}} color='green' size={15}  /> 
                <AiOutlineClose style={{display : validName || !user ? 'none' : 'block' }} color='red' size={15}  /> 
            </FlexDiv>   
            <InputDiv>
            <Input
                ref={userRef}
                autoComplete='off'
                // aria-invalid='true'
                type='text'
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                onFocus={()=>setUserFocus(true)}
                onBlur={()=>setUserFocus(false)}
                
                />
              
             </InputDiv>
            <ErrorDiv ref={errRef} $display={userFocus && !validName ? 1 : 0}>
                <Error  aria-live="assertive">
                4 to 24 characters. <br/>
                Must begin with a letter.<br/>
                Letters, numbers, underscores, hyphens allowed.<br/>
                </Error>
             </ErrorDiv>


             <FlexDiv>
              <Label>Password</Label> 
                 <AiOutlineCheck style={{display : validPwd?  'block' : 'none'}} color='green' size={15}  /> 
                <AiOutlineClose style={{display : validPwd || !pwd ? 'none' : 'block' }} color='red' size={15}  /> 
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
                   {pwd ?  <IconHidePwd style={{display :  showPwd ? 'block' : 'none' }} onClick={handleShow} size={20}/> : null}  
             </InputDiv>
               <ErrorDiv ref={errRef} $display={pwdFocus && !validPwd  ? 1 : 0}>
                <InfoIcon />
                <Error  aria-live="assertive">
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <Span aria-label="exclamation mark">!</Span> <Span aria-label="at symbol">@</Span> <Span aria-label="hashtag">#</Span> <Span aria-label="dollar sign">$</Span> <Span aria-label="percent">%</Span>
                </Error>
              </ErrorDiv>

            <FlexDiv>
              <Label>Confirm Password</Label> 
                 <AiOutlineCheck style={{display : validMatch && matchPwd ?  'block' : 'none'}} color='green' size={15}  /> 
                <AiOutlineClose style={{display : validMatch || !matchPwd ? 'none' : 'block' }} color='red' size={15}  /> 
            </FlexDiv> 
            <InputDiv>
            <Input
             ref={userRef}
             type={showMatchPwd ? 'text' : 'password'}
             value={matchPwd}
             autoComplete='off'
             onChange={(e)=>setMatchPwd(e.target.value)}
             onFocus={()=>setMatchFocus(true)}
             onBlur={()=>setMatchFocus(false)}
             />
             {matchPwd ? <IconShowPwd style={{display : showMatchPwd ? 'none' : 'block' }} onClick={handleShowMatch} size={20}/>: null } 
             {matchPwd ? <IconHidePwd style={{display : showMatchPwd ? 'block' : 'none' }} onClick={handleShowMatch} size={20}/>: null } 
             </InputDiv>
             <ErrorDiv ref={errRef} $display={matchFocus && !validMatch  ? 1 : 0}>
                <InfoIcon />
                <Error  aria-live="assertive">
                Must match the first password input field.
                </Error>
              </ErrorDiv>
            <Button  disabled={!validName || !validPwd || !validMatch ? true : false} >Sign up</Button>
            

        </Form>
     </Section>
  )
}

export default SignUp