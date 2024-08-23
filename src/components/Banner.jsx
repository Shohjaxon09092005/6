import React from 'react'
import '../style/banner.css'
import BannerCard from './BannerCard'
import rasm1 from '../image/banner1.png'
import rasm2 from '../image/banner2.png'
function Banner() {
    return (
        <section className='banner'>
            <div className="container">
                <div className="banner__wrapper">
                    <BannerCard rasm={rasm1} nomi='Flights'btn_text='Show Filghts' />
                    <BannerCard rasm={rasm2} nomi='Hotels' btn_text='Show Hotels'/>

                </div>

            </div>
        </section>
    )
}

export default Banner
