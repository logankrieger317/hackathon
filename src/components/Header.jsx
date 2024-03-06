import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/UB-logo-2.1.png';

function Header() {
  return (
    <div className='header my-7 px-10 h-1/3'>
      <Link to="/login">
        <img className='logo-image' src={logoImage} alt="Map" style={{width: '100%', height: 'auto'}} />
      </Link>
    </div>
  );
}

export default Header;