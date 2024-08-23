import React from 'react'

function CapitalCard({rasm, nomi}) {
  return (
    <div className='capitalCard'>
        <img src={rasm} alt="" />
        <div className="capital__content">
            <h4>{nomi}</h4>
        <p>Flights • Hotels • Resorts</p>
        </div>
        
    </div>
  )
}

export default CapitalCard
