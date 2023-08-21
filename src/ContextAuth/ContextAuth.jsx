import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../Firebase'
import { useNavigate } from 'react-router'


const useContextG  = createContext()

const ContextAuth = ({children}) => {

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
    setSucces(true)
    navigate('/signin')
 } catch (error) {
    if(error.code === 'auth/email-already-in-use'){
        console.log(error.code);
        setErrorMsg('email-already-in-use')
    }
 }
}

// useEffect(()=>{
// const unsubscribe = onAuthStateChanged(auth , (user)=> {
//     setUser(user)
//     console.log(user);
// } )

// return () => unsubscribe()

// },[])

  return (
    <useContextG.Provider value={{email , setEmail , validEmail , setValidEmail,emailFocus , setEmailFocus , user , setUser,validName , setValidName , userFocus , setUserFocus ,pwd , setPwd ,validPwd , setValidPwd , pwdFocus , setPwdFocus ,matchPwd , setMatchPwd , validMatch , setValidMatch ,matchFocus , setMatchFocus ,showPwd , setShowPwd ,showMatchPwd , setShowMatchPwd ,errorMsg , setErrorMsg , handleSignUp}} >
        {children}
    </useContextG.Provider>
  )
}

export default ContextAuth

export const useContextAuth = () => useContext(useContextG)