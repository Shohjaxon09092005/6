import React from 'react'
import '../style/lanka.css'
import SectionNav from './SectionNav'
import rasm1 from '../image/lanka1.png'
import rasm2 from '../image/lanka2.png'
import rasm3 from '../image/lanka3.png'
import rasm4 from '../image/lanka4.png'
function Lanka() {
    return (
        <section className='lanka'>
            <div className="container">
                <SectionNav title='Fall into travel' description="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." btn_text="See All" />
                <div className="lanka__wrapper">
                    <div className="lanka__content">
                        <div className="lanka__text">
                            <h2>Backpacking <br /> Sri Lanka</h2>
                            <div className="div"><h5>From</h5> <h6>$700</h6></div>
                        </div>
                        <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                        <button>Book Flight</button>
                    </div>
                    <div className="lanka__grid">
                        <img src={rasm1} alt="" />
                        <img src={rasm2} alt="" />
                        <img src={rasm3} alt="" />
                        <img src={rasm4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lanka
