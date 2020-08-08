import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>      
      <nav className='header__nav'>
        
        <div className='logo'>
          <h2>Cash</h2>
          <h2 className='logo-green'>me</h2>
        </div>

        <i class="fas fa-bars"></i>
        
      </nav>
    </header>
  )
};

export default Header;
