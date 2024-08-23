import React from 'react'
import '../style/header.css'
import { NavLink, useLocation } from 'react-router-dom'
import plane_light from '../image/airplane_light.png'
import plane_dark from '../image/airplane_dark.png'
import bed_light from '../image/bed_light.png'
import bed_dark from '../image/bed_dark.png'
import logo_light from '../image/logo_light.png'
import logo_dark from '../image/logo_dark.png'
import image from "../image/accountTop.png";

function Header() {
  let location=useLocation()

  return (
    <header className={location.pathname === '/' ? "header" : "other"}>
   <nav>
    <ul className='header__list'>
      <li>
        <NavLink to='/flight'> <img src={location.pathname === '/' ? plane_light : plane_dark} alt="plane" />Find Flight</NavLink>
      </li>
      <li>
        <NavLink to='/hotel'> <img src={location.pathname === '/' ? bed_light : bed_dark} alt="bed" />Find Stays</NavLink>
      </li>
    </ul>
   </nav>
   <NavLink to='/'>
   <img  src={location.pathname === '/' ? logo_light : logo_dark} alt="logotip" />
   </NavLink>
   {location.pathname === "/account" ? <img src={image} alt="img" /> : 
   
   <div className="header__btn">
    <NavLink to="/account">ACCOUNT</NavLink>
    <button>Sign up</button>
   </div>
   }
    </header>
  )
}

export default Header
