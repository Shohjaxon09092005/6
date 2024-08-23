import React from 'react'
import '../style/hotelHero.css'
import rasm1 from '../image/hotel1.png'
import rasm2 from '../image/hotel2.png'
import rasm3 from '../image/hotel3.png'
import rasm4 from '../image/hotel4.png'
function HotelHero() {
    return (
        <section className='hotelHero'>
            <div className="container">
                <h2>Your recent searches</h2>
                <div className="hotelHero__wrapper">
                    <div className="hotelHero__card">
                        <img src={rasm1} alt="" />
                        <div className="hotelHero__content">
                            <h4>    Istanbul, Turkey</h4>
                            <p>325 places</p>
                        </div>

                    </div>
                    <div className="hotelHero__card">
                        <img src={rasm2} alt="" />
                        <div className="hotelHero__content">
                            <h4>    Sydney, Australia</h4>
                            <p>325 places</p>
                        </div>

                    </div>
                    <div className="hotelHero__card">
                        <img src={rasm3} alt="" />
                        <div className="hotelHero__content">
                            <h4>Baku, Azerbaijan</h4>
                            <p>325 places</p>
                        </div>

                    </div>
                    <div className="hotelHero__card">
                        <img src={rasm4} alt="" />
                        <div className="hotelHero__content">
                            <h4> Malé, Maldives</h4>
                            <p>325 places</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelHero
