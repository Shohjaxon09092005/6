import React from 'react'
import stars from '../image/stars.png'
import google from '../image/google.png'
function ReviewCard({title, desc, name,span,photo}) {
  return (
    <div className='reviewCard'>
        <div className="cardcha"></div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <h6>View more</h6>
      <img src={stars} alt="" />
      <div className="review__content">
         <h5>{name}</h5>
      <span>{span}</span>
      </div>
     
      <img className='google' src={google} alt="" />   
      <img src={photo} alt="" />   
    </div>
  )
}

export default ReviewCard
