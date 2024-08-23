import React from 'react'
import "../style/travel.css"
import SectionNav from './SectionNav'
import TravelCard from './TravelCard'
import rasm1 from '../image/travel1.png'
import rasm2 from '../image/travel2.png'
import rasm3 from '../image/travel3.png'
import rasm4 from '../image/travel4.png'
function Travel({text}) {
  return (
    <section className='travel'>
      <div className="container">
        <SectionNav title=" Fall into travel
" description="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." btn_text="See All"/>
      
      <div className="travel__wrapper">
        <TravelCard btn_text={text} photo={rasm1} title="Melbourne" desc=" An amazing journey" sum="$ 700"/>
        <TravelCard btn_text={text} photo={rasm2} title="Paris" desc="A Paris Adventure" sum="$ 600"/>
        <TravelCard btn_text={text} photo={rasm3} title="London" desc="London eye adventure" sum="$ 350"/>
        <TravelCard btn_text={text} photo={rasm4} title="Columbia" desc="Amazing streets" sum="$ 700"/>
      </div>
      </div>
      
    </section>
  )
}

export default Travel
