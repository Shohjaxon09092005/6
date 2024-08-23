import React from 'react'
import '../style/review.css'
import SectionNav from './SectionNav'
import rasm1 from '../image/rev1.png'
import rasm2 from '../image/rev2.png'
import rasm3 from '../image/rev3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ReviewCard from './ReviewCard';
function Review() {
  return (
    <section className='review'>
      <div className="container">
        <SectionNav title='Reviews ' description='What people says about Golobe facilities' btn_text='See All'/>
        
        <Swiper
        loop={true}
        slidesPerView={2.9}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
       
        className="mySwiper"
      >
        <SwiperSlide><ReviewCard title='“A real sense of community, nurtured”' desc='Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.' name='Olga' span='Weave Studios – Kai Tak' photo={rasm1} /></SwiperSlide>
        <SwiperSlide><ReviewCard title='“The facilities are superb. Clean, slick, bright.”' desc='“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle
' name='Thomas' span='Weave Studios – Olympic' photo={rasm2} /></SwiperSlide>
        <SwiperSlide><ReviewCard title='“A real sense of community, nurtured”' desc='Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.' name='Eliot' span='Weave Studios – Kai Tak' photo={rasm3} /></SwiperSlide>
        <SwiperSlide><ReviewCard title='“A real sense of community, nurtured”' desc='Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.' name='Olga' span='Weave Studios – Kai Tak' photo={rasm1} /></SwiperSlide>
       
        
      </Swiper>
      </div>
    </section>
  )
}

export default Review
