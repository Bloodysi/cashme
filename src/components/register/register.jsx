import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { context } from '../../context';


const Register = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const { user, setUser } = useContext(context);


  if(user){
    return <Redirect to='/' />
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(username === '' || password === '' || email === ''){
      return null;
    }    
    setUser({
      username,
      email,
      password
    })
    setUsername('')
    setPassword('')
    setEmail('')
  }

  
  return (
   <div> 
    <div className='section-title'>        
        Register
    </div>
    <form className='form-container' onSubmit={(e)=> handleSubmit(e)}>

      <div className='form-control'>
       <label className='form-label' htmlFor="">Username</label>
       <input 
        className='form-input' 
        value={username} 
        type="text"
        onChange={(e)=> setUsername(e.target.value)}
      />
      </div>
      <div className='form-control'>
       <label className='form-label' htmlFor="">Email</label>
        <input 
          className='form-input' 
          value={email} 
          type="email"
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
     <div className='form-control'>
       <label className='form-label' htmlFor="">Password</label>
        <input 
        className='form-input' 
        value={password}        
        type="password"
        onChange={(e)=> setPassword(e.target.value)}
        />
      </div>
     
      <button className='btn'>Register</button>

    </form>
  </div>       
  
     
   
  )
}

export default Register