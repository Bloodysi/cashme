import React from 'react';

const Login = () => {
  return (
    
    <div>
      
      <div className='section-title'>
          Login
      </div>

      <form className='form-container'>

        <div className='form-control'>
          <label className='form-label' htmlFor="">Username</label>
          <input className='form-input' type="text"/>
        </div>

        <div className='form-control'>
          <label className='form-label' htmlFor="">Password</label>
          <input className='form-input' type="password"/>
        </div>

        <button className='btn'>Login</button>

      </form>
    </div>
  )
}

export default Login