import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCheck , AiFillInfoCircle , AiOutlineFieldTime , AiOutlineClose, AiFillCheckCircle} from 'react-icons/ai'
import { styled } from 'styled-components';


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
const Input = styled.input`
padding: .5rem;
margin: 0 1rem;
width: auto;
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
    const userRef = useRef()
    const errRef = useRef()

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
     

    const [user , setUser] = useState('')
    const [validName , setValideName] = useState(false)
    const [userfocus , setUserFocus] = useState(false)

    const [pwd , setPwd] = useState('')
    const [validPwd , setValidPwd] = useState(false)
    const [pwdFocus , setPwdFocus] = useState(false)

    const [matchPwd , setMatchPwd] = useState('')
    const [validMatch , setValidMatch] = useState(false)
    const [matchFocus , setMatchFocus] = useState(false)

    const [errMsg , setErrorMsg] = useState('')
    const [succes , setSucces] = useState(false)

    console.log(userRef);
    console.log(userfocus);

    const handleSubmit = (e) => {
      e.preventDefault()
    }


useEffect(()=>{
  userRef.current.focus() ;
},[])

useEffect(()=>{
const result = USER_REGEX.test(user)
console.log(result)
console.log(user)
setValideName(true)
},[user])


useEffect(()=>{
    const result = PWD_REGEX.test(user)
    console.log(result)
    console.log(pwd)
    setValidPwd(true)
    const match = pwd === matchPwd ;
    setValidMatch(match)
    },[])


useEffect(()=>{
setErrorMsg('')

},[user , pwd , matchPwd])

  return (
    <Section>
        <Form onSubmit={handleSubmit} >
            <Title>Sign Up</Title>
               <Error ref={errRef} $display={errMsg ? 1 : 0} aria-live="assertive">{errMsg}</Error>
            <FlexDiv>
                <Label>Username</Label> 
                {/* <AiOutlineCheck style={{display : validName ? '' : 'none' }} color='green' size={15}  />  */}
                <AiOutlineClose style={{display : validName || !user ? '' : 'none' }} color='red' size={15}  /> 
            </FlexDiv>   
            <Input
             ref={userRef}
             autoComplete='off'
             aria-invalid={validName ?  false : true }
             type='text'
             value={user}
             onChange={(e)=>setUser(e.target.value)}
             onFocus={()=>setUserFocus(true)}
             onBlur={()=>setUserFocus(false)}
              
            />
            <ErrorDiv ref={errRef} $display={errMsg ? 0 : 1}>
                <InfoIcon />
                <Error  aria-live="assertive">
                4 to 24 characters. <br/>
                Must begin with a letter.<br/>
                Letters, numbers, underscores, hyphens allowed.<br/>
                </Error>
             </ErrorDiv>
             <FlexDiv>
              <Label>Password</Label> 
                {/* <AiOutlineCheck style={{display : validName ? '' : 'none' }} color='green' size={15}  />  */}
                <AiOutlineClose style={{display : validName || !user ? '' : 'none' }} color='red' size={15}  /> 
            </FlexDiv> 
            
            <Input
             ref={userRef}
             type='password'
             value={pwd}
             autoComplete='off'
             onChange={(e)=>setPwd(e.target.value)}
             onFocus={()=>setPwdFocus(true)}
             onBlur={()=>setPwdFocus(false)}
              
            />
               <ErrorDiv ref={errRef} $display={pwdFocus && !validPwd  ? 0 : 1}>
                <InfoIcon />
                <Error  aria-live="assertive">
                8 to 24 characters.<br />
               Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <Span aria-label="exclamation mark">!</Span> <Span aria-label="at symbol">@</Span> <Span aria-label="hashtag">#</Span> <Span aria-label="dollar sign">$</Span> <Span aria-label="percent">%</Span>
                </Error>
              </ErrorDiv>

            <FlexDiv>
                <Label>Confirm Password</Label> 
                {/* <AiOutlineCheck style={{display : validName ? '' : 'none' }} color='green' size={15}  />  */}
                <AiOutlineClose style={{display : validName || !user ? '' : 'none' }} color='red' size={15}  /> 
            </FlexDiv> 
            <Input
             ref={userRef}
             type='password'
             value={matchPwd}
             autoComplete='off'
             onChange={(e)=>setMatchPwd(e.target.value)}
             onFocus={()=>setMatchFocus(true)}
             onBlur={()=>setMatchFocus(false)}
            />
             <ErrorDiv ref={errRef} $display={matchFocus && !validMatch  ? 0 : 1}>
                <InfoIcon />
                <Error  aria-live="assertive">
                Must match the first password input field.
                </Error>
              </ErrorDiv>
            <Button >Sign up</Button>
            

        </Form>
     </Section>
  )
}

export default SignUp