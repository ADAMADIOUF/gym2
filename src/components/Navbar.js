import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='/' className='navbar-logo'>
          Planet Fitness
        </a>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/schedule' className='nav-link'>
              Classes
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/membership' className='nav-link'>
              Membership
            </Link>
          </li>
          <li className='nav-item'>
            <a href='/locations' className='nav-link'>
              Locations
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
