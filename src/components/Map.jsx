import React from 'react'
import "../style/map.css"
import SectionNav from './SectionNav'
import rasm from '../image/Map.png'
function Map() {
  return (
    <section className='map' >
       
      <div className="container">
        <SectionNav title="Let's go places together" description="Discover the latest offers and news and start planning your next trip with us." btn_text="See All"/>
      </div> 
      <img src={rasm} alt="" />
    </section>
  )
}

export default Map
