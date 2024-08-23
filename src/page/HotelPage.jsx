import React from 'react'
import Hero from '../components/Hero'
import rasm from '../image/hotelhero.png'
import Travel from '../components/Travel'
import Lanka from '../components/Lanka'
import HotelHero from '../components/HotelHero'
function HotelPage() {
  return (
    <main>
      <Hero rasm={rasm} />
      <HotelHero/>
      <Travel text="Book a Hotel"/>
      <Lanka />

    </main>
  )
}

export default HotelPage
