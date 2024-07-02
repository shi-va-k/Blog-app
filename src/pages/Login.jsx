import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const  [userdata, setUserdata] = useState({
    email: '',
    password: ''
  })
  const changeInputHandle = (e)=> {
  setUserdata(prevState => {
    return{...prevState, [e.target.name]: e.target.value}
  })  
  }
  
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form  className="form login-form">
          <p className='form-error-message'>This is an error message</p>
          
          <input type='text' placeholder='Mail' name='email' value={userdata.email} onChange={changeInputHandle} autoFocus/>
          <input type='password' placeholder='Password' name='password' value={userdata.password} onChange={changeInputHandle}/>
          
          <button type='submit'className='btn primary'>Login</button>
        </form>
        <small>Don't have an account? <Link to='/register'>Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login

