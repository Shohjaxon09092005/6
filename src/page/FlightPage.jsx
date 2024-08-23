import React from 'react'
import Hero from '../components/Hero'
import rasm from '../image/flighthero.png'
import Map from '../components/Map'
import Travel from '../components/Travel'
import Lanka from '../components/Lanka'


function FlightPage() {
  return (
    <main>
      <Hero rasm={rasm} />
      <Map />
      <Travel text='Book Flight'/>
      <Lanka/>
    </main>
  )
}

export default FlightPage
