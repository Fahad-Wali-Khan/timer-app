import React from 'react'
import GoogleButton from 'react-google-button'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from './FirebaseConfig'
import { useNavigate } from 'react-router-dom'
export default function Signin() {
  const navigate=useNavigate();
  const handleLogin=async()=>{
    try {
    const result=await signInWithPopup(auth,provider)
    console.log(result)
    localStorage.setItem('token',result.user.accessToken)
    localStorage.setItem('user',JSON.stringify(result.user));
    navigate("/");
    }catch(error){
    console.log(error);
    }
  }
  return (
    <div className='bg-blue-200 h-screen flex justify-center items-center h-full'>
      <div className='border-0'>
        <h1 className='p-6 text-center text-4xl font-serif font-semibold text-gray-700'>Timer App</h1>
      < GoogleButton onClick={handleLogin}></GoogleButton>
      </div>
    </div>
  )
}
