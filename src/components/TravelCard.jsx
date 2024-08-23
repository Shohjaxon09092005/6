import React from 'react'

function TravelCard({photo,title,desc, sum,btn_text}) {
  return (
    <div className='travelCard' style={{backgroundImage:`url(${photo})`}}>
      <div className="travelCard__wrapper">
        <div className="travelCard__content">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <h4>{sum}</h4>

      </div>
      <button>{btn_text}</button>
    </div>
  )
}

export default TravelCard
