import React from 'react'
import rasm1 from '../image/footer_logo.png'
import rasm2 from '../image/akar-icons_facebook-fill.png'
import rasm3 from '../image/akar-icons_twitter-fill.png'
import rasm4 from '../image/akar-icons_youtube-fill.png'
import rasm5 from '../image/ant-design_instagram-filled.png'
import rasm6 from '../image/pochta.png'
import '../style/footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer'> 
     <div className="container"> 
      
      <div className="footer__wrapper">
       <div className="subscribe">
          <div className="subscribe__content">
            <h2>Subscribe Newsletter</h2>
            <h5>The Travel</h5>
            <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <form >
              <input type="text" placeholder='Your email address'/>
              <button>Subscribe</button>
            </form>
          </div>
          <div className="subscribe__img">
             <img src={rasm6} alt="" />
          </div>
         
        </div>
        <div className="footer__logo">
          <NavLink to='/'><img src={rasm1} alt="" /> </NavLink>
          
       
        <div className="footer__icons">
          <img src={rasm2} alt="" />  
          <img src={rasm3} alt="" />
          <img src={rasm4} alt="" />
          <img src={rasm5} alt="" />
        </div> 
        </div>
        <ul>
          <h3>Our Destinations</h3>
          <li>Canada</li>
          <li>Alaksa</li>
          <li>France</li>
          <li>Iceland</li>
        </ul>
        <ul>
          <h3>Our Activities</h3>
          <li>Northern Lights</li>
          <li>Cruising & sailing</li>
          <li>Multi-activities</li>
          <li>Kayaing</li>
        </ul>
        <ul>
          <h3>Travel Blogs</h3>
          <li>Bali Travel Guide</li>
          <li>Sri Lanks Travel Guide</li>
          <li>Peru Travel Guide</li>
          <li>Bali Travel Guide</li>
        </ul>
        <ul>
          <h3>About Us</h3>
          <li>Our Story</li>
          <li>Work with us</li>
         
        </ul>
        <ul>
          <h3>Contact Us</h3>
          <li>Our Story</li>
          <li>Our Story</li>
        </ul>
      </div>
     </div>
    </footer>
  )
}

export default Footer
