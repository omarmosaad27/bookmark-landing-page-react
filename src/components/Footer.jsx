import React from 'react'
import {Link} from 'react-router-dom'
import facebook from '../images/icon-facebook.png'
import twitter from '../images/icon-twitter.png'
import logo from '../images/logo-bookmark.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to={"/"}>
          <img src={logo} alt="im" />
        </Link>
        <Link to={'/features'} className="footer-link">
          Features
        </Link>
        <Link to={'/pricing'} className="footer-link">
          Pricing
        </Link>
        <Link to={'/contact'} className="footer-link">
          Contact
        </Link>
      </div>
      <div className="social">
        <img src={facebook} alt="face" />
        <img src={twitter} alt="twi" />
      </div>
    </div>
  )
}

export default Footer