import React from 'react'
import '../style/hero.css'
import HeroForm from './HeroForm'

function Hero({rasm}) {
    return (
        <section className='hero' style={{backgroundImage:`url(${rasm})`}}>
            <div className="container">
             <div className="hero__content">
                <h1>
                Make your travel whishlist, we’ll do the rest
                </h1>
                <h4>Special offers to suit your plan</h4>
             </div>
    <HeroForm/>
            </div>
        </section>
    )
}

export default Hero
