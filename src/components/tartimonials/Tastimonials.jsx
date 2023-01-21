import React from 'react'
import './tastimonials.css'
import AVTR1 from '../../assets/avatar1.jpg' 
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
{
  avatar: AVTR1,
  name: 'Abhinav Singh',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus est quis consequatur adipisci veniam deserunt, eveniet perspiciatis dolorum. Alias provident ipsa possimus nemo molestiae impedit, iusto facilis beatae voluptates.'
},

{
  avatar: AVTR2,
  name: 'Gaurav Mishra',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus est quis consequatur adipisci veniam deserunt, eveniet perspiciatis dolorum. Alias provident ipsa possimus nemo molestiae impedit, iusto facilis beatae voluptates.'
},

{
  avatar: AVTR3,
  name: 'Vishal Singh',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus est quis consequatur adipisci veniam deserunt, eveniet perspiciatis dolorum. Alias provident ipsa possimus nemo molestiae impedit, iusto facilis beatae voluptates.'
},

{
  avatar: AVTR4,
  name: 'Muskan Yadav',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus est quis consequatur adipisci veniam deserunt, eveniet perspiciatis dolorum. Alias provident ipsa possimus nemo molestiae impedit, iusto facilis beatae voluptates.'
},

{
  avatar: AVTR4,
  name: 'Tiwari Priyanka Shri Akhilish',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus est quis consequatur adipisci veniam deserunt, eveniet perspiciatis dolorum. Alias provident ipsa possimus nemo molestiae impedit, iusto facilis beatae voluptates.'
},
]

const Tastimonials = () => {
  return (
    <section id="tastimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testi__container"
       // install Swiper modules
       modules={[Pagination]} spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review,}, index) => 
          {
            return (
              <SwiperSlide key={index} className='tastimonial'>
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                
                <h5 className="client__name">{name}</h5>
                <small className="client_reveiw">
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Tastimonials