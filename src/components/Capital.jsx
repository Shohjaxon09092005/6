import React from 'react'
import '../style/capital.css'
import SectionNav from './SectionNav'
import CapitalCard from './CapitalCard'
import rasm1 from '../image/turkey.png'
import rasm2 from '../image/australia.png'
import rasm3 from '../image/baku.png'
import rasm4 from '../image/male.png'
import rasm5 from '../image/paris.png'
import rasm6 from '../image/newyork.png'
import rasm7 from '../image/london.png'
import rasm8 from '../image/tokyo.png'
import rasm9 from '../image/dubai.png'

function Capital() {
  return (
    <section className='capital'>
      <div className="container">
        <SectionNav title=" Plan your perfect trip" description='Search Flights & Places Hire to our most popular destinations' btn_text="See more places"/>
        <div className="capital__grid">
            <CapitalCard rasm={rasm1} nomi="Istanbul, Turkey"/>
            <CapitalCard rasm={rasm2} nomi="Sydney, Australia"/>
            <CapitalCard rasm={rasm3} nomi="Baku, Azerbaijan"/>
            <CapitalCard rasm={rasm4} nomi="Malé, Maldives"/>
            <CapitalCard rasm={rasm5} nomi="Paris, France"/>
            <CapitalCard rasm={rasm6} nomi="New York, US"/>
            <CapitalCard rasm={rasm7} nomi="London, UK"/>
            <CapitalCard rasm={rasm8} nomi="Tokyo, Japan"/>
            <CapitalCard rasm={rasm9} nomi="Dubai, UAE"/>

        </div>
      </div>
    </section>
  )
}

export default Capital
