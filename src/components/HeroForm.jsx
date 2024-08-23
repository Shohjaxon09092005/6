import React from 'react'
import '../style/heroForm.css'
import { NavLink, useLocation } from 'react-router-dom'
import rasm1 from '../image/airplane_dark.png'
import rasm2 from '../image/bed_dark.png'
import rasm3 from '../image/heroformbottom.png'
function HeroForm() {
    let joy = useLocation()
    return (
        <section className='heroForm'>
            {joy.pathname === "/" ? 
            <div className="heroForm__top">
                <NavLink to='/flight'>
                    <img src={rasm1} alt="img" />
                    Flights
                </NavLink>
                <NavLink to='/hotel'>
                    <img src={rasm2} alt="img" />
                    Stays
                </NavLink>
            </div> : <p className='active'>Where are you flying? </p>}
            <div className="heroForm__wrapper">
                <fieldset>
                    <legend>From - To</legend>
                    Lahore - Karachi
                </fieldset>
                <fieldset>
                    <legend>Trip</legend>
                    Return
                </fieldset>
                <fieldset>
                    <legend>Depart- Return</legend>
                    07 Nov 22 - 13 Nov 22
                </fieldset>
                <fieldset>
                    <legend>Passenger - Class</legend>
                    1 Passenger, Economy
                </fieldset>
            </div>
            <div className="heroForm__bottom">
                <button> + Add Promo Code </button>
                    
                    <button><img src={rasm3} alt="bottomimg" />Show Filghts</button>
               
            </div>
        </section>

    )
}

export default HeroForm
