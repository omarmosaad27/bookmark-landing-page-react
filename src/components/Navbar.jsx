import React from 'react'
import {Link} from 'react-router-dom'
import menu from '../images/icon-hamburger.png'
import close from '../images/icon-close.png'
import facebook from '../images/icon-facebook.png'
import twitter from '../images/icon-twitter.png'
import logo from '../images/logo-bookmark.png'
import { useGlobalContext } from '../context'
const Navbar = () => {
  const { showMenu, setShowMenu } = useGlobalContext();
  return (
    <nav>
      <div className={`${showMenu ? "navbar show": "navbar"}`}>
        <div className="nav-header">
          <Link to={"/"}>
            <img src={ logo } alt="bookmark" />
          </Link>
          <button className='toggle' onClick={()=>setShowMenu(!showMenu)}>
            <img src={showMenu ? close : menu} alt="icon" />
          </button>
        </div>
        <div className="links-container">
          <ul className='links'>
            <Link to={'/features'} className="nav-link">
              Features
            </Link>
            <Link to={'/pricing'} className="nav-link">
              Pricing
            </Link>
            <Link to={'/contact'} className="nav-link">
              Contact
            </Link>
            <Link to={'/login'} className={`${showMenu? "btn white" : "btn red"}`}>
              Login
            </Link>
          </ul>
        </div>
        {
          showMenu && <div className='social-links'>
            <img src={facebook} alt="so" />
            <img src={twitter} alt="so" />
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar