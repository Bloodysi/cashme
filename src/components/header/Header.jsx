import React, { useState } from 'react';
import './Header.css';

const Header = () => {

  const [navbar, setNavbar] = useState(false)
  

  return (
    
    <header className='header'>      
      <nav className='header__nav'>
        
        <div className='logo'>
          <h2>Cash</h2>
          <h2 className='logo-green'>Me</h2>
        </div>

        
        <i 
          className={!navbar ? "fas fa-bars navbar-icon" : "far fa-times-circle navbar-icon white openIcon "}
          onClick={()=> setNavbar(!navbar)} 
        />

    	  
        <ul className={`header__nav-list ${navbar ? 'open'  : 'close'}`}>
          <li><i className="fas fa-book"></i>Records</li>
          <li><i className="fas fa-chart-bar"></i>Chart</li>
          <li><i className="fas fa-cog"></i>Setting</li>
        </ul>
        
      </nav>
    </header>
    
  )
};

export default Header;
