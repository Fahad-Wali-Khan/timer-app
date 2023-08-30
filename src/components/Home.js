import React from 'react'
import { auth } from './FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
export default function Home() {
    const user=JSON.parse(localStorage.getItem('user'));
    const navigate=useNavigate();
    const handleLogout=async()=>{
        await signOut(auth);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/signin");
    }
  return (
  <div>
    <nav
  class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div class="flex w-full flex-wrap items-center justify-between px-3">

    <img src={user.photoURL} className='w-14 rounded-lg float-left' alt='userDisplay'></img>
    <h1 className='py-2 text-center text-4xl font-serif font-semibold text-gray-700 float-none'>Timer App</h1>
    
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right" onClick={handleLogout}>Logout</button>
  </div>
  </nav>
<h1 className='float-none text-left'>Logged in as {user&&user.displayName}</h1>
        <div className='pb-4'>
        <Timer></Timer>
        </div>
        
    </div>
  )
}
