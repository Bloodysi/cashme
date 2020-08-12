import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  const [navbar, setNavbar] = useState(false)
  
  const animationClose = navbar ? '' : 'close'

  return (
    
    <header className='header'>      
      <nav className='header__nav'>
        <Link to='/' className='logo-link'>
          <div className='logo'>
            <p>Cash</p>
            <p className='logo-green'>Me</p>            
          </div>
        </Link>
        
        <i 
          className={!navbar ? "fas fa-bars navbar-icon closeIcon" : "far fa-times-circle navbar-icon white openIcon "}
          onClick={()=> setNavbar(!navbar)} 
        />

    	  
        <ul className={`header__nav-list ${navbar ? 'open'  : animationClose}`}>
          <Link to='/record' className='header__nav-list-link'>
            <li onClick={()=> setNavbar(false)} ><i className="fas fa-book" />Records</li>
          </Link>
          <li onClick={()=> setNavbar(false)}><i className="fas fa-chart-bar" />Chart</li>
          <Link to='/settings' className='header__nav-list-link'>
            <li onClick={()=> setNavbar(false)}>          
              <i className="fas fa-cog" />
              Settings         
            </li>
          </Link>
        </ul>
        
      </nav>
    </header>
    
  )
};

export default Header;
