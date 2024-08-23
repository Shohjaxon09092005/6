import React from 'react'
import '../style/sectionNav.css'
function SectionNav({title, description, btn_text}) {
  return (
    <div className='sectionNav'>
      <div className="container">
        <div className="sectionNav__wrapper">
            <div className="sectionNav__content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button>{btn_text}</button>
        </div>
      </div>
    </div>
  )
}

export default SectionNav
