import React from 'react'
import '../style/homeHero.css'
import HeroForm from './HeroForm'
function HomeHero() {
  
  return (
    <section className='homeHero'>
      
        <div className="overlay">

        </div>
      <div className="container">
        <div className="header__content">
           <h2>Helping Others</h2>
        <h1>Live & Travel</h1>
        <h4>Special offers to suit your plan</h4>  
        </div>
       <HeroForm/>
      </div>
    </section>
  )
}

export default HomeHero
