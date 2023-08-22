import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Provider, auth } from '../../Firebase'
import { useNavigate } from 'react-router'


const useContextG  = createContext()

const ContextAuth = ({children}) => {


    const [currentUser , setCurrentUser] = useState(null) 
    

    const [email , setEmail] = useState('')
    const [validEmail , setValidEmail] = useState(false)
    const [emailFocus , setEmailFocus] = useState(false)


    const [user , setUser] = useState('')
    const [validName , setValidName] = useState(false)
    const [userFocus , setUserFocus] = useState(false)

    const [pwd , setPwd] = useState('')
    const [validPwd , setValidPwd] = useState(false)
    const [pwdFocus , setPwdFocus] = useState(false)

    const [matchPwd , setMatchPwd] = useState('')
    const [validMatch , setValidMatch] = useState(false)
    const [matchFocus , setMatchFocus] = useState(false)

    const [errorMsg , setErrorMsg] = useState('')
    const [succes , setSucces] = useState(false)
    
    
    const [showPwd , setShowPwd] = useState(false)
    const [showMatchPwd , setShowMatchPwd] = useState(false)

  const navigate = useNavigate()

const handleSignUp =  async (e) => {
    e.preventDefault()
 try {
    await createUserWithEmailAndPassword(auth,email,pwd)
    // setSucces(true)
    navigate('/signin')
 } catch (error) {
    if(error.code === 'auth/email-already-in-use'){
        console.log(error.code);
        setErrorMsg('email-already-in-use')
      
    }
 }
}

 
const handleSignIn = async (e) => {
  e.preventDefault() ;
try {
   await signInWithEmailAndPassword(auth , email , pwd)
   console.log('succes' , succes);
   navigate('/')
} 
catch(error){
   console.log(error.code);
  
   if(error.code === 'auth/invalid-email') {
    setErrorMsg('invalid-email')
    } 
    else if(error.code === 'auth/user-not-found') {
     setErrorMsg('user-not-found')
    } 
    else if (error.code === 'auth/missing-password') {
     setErrorMsg('missing-password')

    } else if (error.code === 'auth/wrong-password') {
     setErrorMsg('wrong-password')
    }
  } 
 
}

const SigninwithGoogle = async() => {
  try {
    await signInWithPopup(auth , Provider)
    setSucces(true)
    navigate('/')

  } catch (error) {
    console.log(error.code)
  }
}


const LogOut = async () => {
  try {
    await signOut(auth)
    setCurrentUser(null)
    setSucces(false)
  } catch (error) {
    console.log(error.code);
  }
}


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth , (currentuser)=> {
     setCurrentUser(currentuser)
     setSucces(true)
     console.log(currentUser);
   
} )

return () => unsubscribe()

},[])

  return (
    <useContextG.Provider value={{currentUser , setCurrentUser , email , setEmail , validEmail , setValidEmail,emailFocus , setEmailFocus , user , setUser,validName , setValidName , userFocus , setUserFocus 
    ,pwd , setPwd ,validPwd , setValidPwd , pwdFocus , setPwdFocus ,matchPwd , setMatchPwd , validMatch , setValidMatch ,matchFocus , setMatchFocus ,showPwd , 
    setShowPwd ,showMatchPwd , setShowMatchPwd ,errorMsg , setErrorMsg , handleSignUp , handleSignIn , LogOut , succes , SigninwithGoogle}} >
        {children}
    </useContextG.Provider>
  )
}

export default ContextAuth

export const useContextAuth = () => useContext(useContextG)