import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <h3>GYM Fitness</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='footer-right'>
          <h4>Contact Us</h4>
          <ul className='contact-info'>
            <li>
              <i className='fa fa-map-marker'></i> 123 Main Street, City,
              Country
            </li>
            <li>
              <i className='fa fa-phone'></i> +1 123-456-7890
            </li>
            <li>
              <i className='fa fa-envelope'></i> info@gymfitness.com
            </li>
          </ul>
          <div className='social-icons'>
            <a href='#'>
              <FaFacebook />
            </a>
            <a href='#'>
              <FaTwitter />
            </a>
            <a href='#'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} GYM Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
