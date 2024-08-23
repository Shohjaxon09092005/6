import React from 'react'
import rasm1 from '../image/heroformbottom.png'

function BannerCard({rasm, nomi,btn_text}) {
  return (
    <div className='bannerCard' style={{backgroundImage:`url(${rasm})`}}>
      <div className="bannerCard__content">
        <h2>{nomi}</h2>
      <p>Search Flights & Places Hire to our most popular destinations</p>
      <button><img src={rasm1} alt="" /> {btn_text}</button>
      </div>
      
      <div className="div"></div>
    </div>
  )
}

export default BannerCard
