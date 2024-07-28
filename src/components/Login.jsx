import React from 'react'

export default function Login() {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <div className='userdata'>
            <label>Username:</label>
            <input type='text' name='username' placeholder='Enter your username'/><br/></div>
            <div className='userdata'>
            <label>Password:</label>
            <input type='password' name='password' placeholder='Enter your password'/><br/></div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
