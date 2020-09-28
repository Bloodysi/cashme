import React, { useState, useContext } from 'react';
import axios from 'axios';

import { context } from '../../context'


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(context)


  const handleSubmit = async (body) => {
    const { data } = await axios('/api/users', ({
      headers: {
        'content-type': 'appplication/header'
      },
      method: 'POST',
      data: body
    }))
    if(data){
      console.log(data)
    }
  }

  return (
    
    <div>
      
      <div className='section-title'>
          Login
      </div>

      <form className='form-container'>

        <div className='form-control'>
          <label className='form-label' htmlFor="">Username</label>
          <input 
            className='form-input' 
            value={username} 
            type="text"
            onChange={(e)=> setUsername(e.target.value)}/>
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="">Password</label>
          <input 
            className='form-input' 
            value={password} 
            type="password"
            onChange={(e)=> setPassword(e.target.value)}/>
        </div>

        <button className='btn'>Login</button>

      </form>
    </div>
  )
}

export default Login