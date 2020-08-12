import React, { useContext } from 'react';
import './Settings.css'

import { context } from '../../context';

const Settings = () => {

  const { user } = useContext(context);

  return (
    <div className="setting-container">

      <div className='section-title'>
        <i className="fas fa-cog" />
        Settings
      </div>

      <div className='setting'>

        <div className='setting-option'>
          <p className='setting-name' >{user?.username}</p>
        </div>

        <div className='setting-option'>
          <p>Email</p>
          <i className="fas fa-cog" />
        </div>

        <div className='setting-option'>
          <p>Password</p>
          <i className="fas fa-cog" />
        </div>

        <div className='setting-option red-settings'>
          <p>LogOut</p>
          <i class="fas fa-power-off" />
        </div>

      </div>
    </div>
  )
};

export default Settings;
