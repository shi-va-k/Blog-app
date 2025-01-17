import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const  [userdata, setUserdata] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()
  const changeInputHandle = (e)=> {
  setUserdata(prevState => {
    return{...prevState, [e.target.name]: e.target.value}
  })  
  }
  const registerUser = async (e)=>{
    e.preventDefault()
    setError('')
    try{
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userdata)
      const newUser = await response.data
      console.log(newUser)
      if(!newUser){
        setError("Couldn't register user. Please try again.")
      }
      navigate('/')
    }  
    catch (err){
      setError(err.response.data.message)
    }
  }
  
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form  className="form register-form" onSubmit={registerUser}>
          {error && <p className='form-error-message'>{error}</p>}
          <input type='text' placeholder='Full name' name='name' value={userdata.name} onChange={changeInputHandle}/>
          <input type='text' placeholder='Mail' name='email' value={userdata.email} onChange={changeInputHandle}/>
          <input type='password' placeholder='Password' name='password' value={userdata.password} onChange={changeInputHandle}/>
          <input type='password' placeholder='Confirm Password' name='password2' value={userdata.password2} onChange={changeInputHandle}/>
          <button type='submit'className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign in</Link></small>
      </div>
    </section>
  )
}

export default Register
