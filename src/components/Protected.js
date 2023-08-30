import React from 'react'

import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export default function Protected() {
    const token =localStorage.getItem('token');
  return (
    token?<Outlet/>:<Navigate to="/signin" />
  )
}
