import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  const navigate = useNavigate()
  const login = useCallback(()=>{
    navigate('/login')
  },[navigate])

  return (
    <div className='nav'>
        <h1>Quize Name</h1>
        <button onClick={login}>Login/SignIn</button>
    </div>
  )
}
