import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  const handleItemClick = () => {
   setMenuOpen(false)
  }
  const scrollToTop = () => {
    scroll.scrollToTop()
    handleItemClick()
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={scrollToTop}>
          Planet Fitness
        </Link>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <Link to='/' className='nav-link' onClick={handleItemClick}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/schedule' className='nav-link' onClick={handleItemClick}>
              Classes
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/membership'
              className='nav-link'
              onClick={handleItemClick}
            >
              Membership
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/locations'
              className='nav-link'
              onClick={handleItemClick}
            >
              Locations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
