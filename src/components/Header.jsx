import React from 'react'
import '../CSS/header.css'
import logoImage from '../images/UB-logo-2.1.png'

function Header() {
  return (
    <div className='header my-7 px-10'>
    <img className='logo-image' src={logoImage} alt="Map" style={{width: '100%', height: 'auto'}} />
    </div>
  )
}

export default Header