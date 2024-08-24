import React from 'react'

export default function Login() {
  return (
    <div className='header'>
      <form action="">
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" required /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" required /><br />
        <button type="submit">Login</button><br />
        <p>Don't have an account? <a href="/register">Sign up</a></p>
        <p>Forgot your password? <a href="/forgot-password">Reset it</a></p>
      </form>
    </div>
  )
}
