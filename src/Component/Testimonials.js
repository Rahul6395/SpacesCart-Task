import React from 'react';
import "../Style/SectionThree.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";


function Testimonials() {
  return (
    <div className='testimonialsCon'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <div className='mt-2 mb-5'> 
              <h3 className='testTextColor text-center'>Our Feeds</h3>
            </div>
            <div>
            <Swiper
          spaceBetween={5}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
       
                <SwiperSlide className="slide ">
                <div>
                  <img src="img/shp1.jpg" className='scrollImg'/>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide ">
                <div>
                  <img src="img/G2.jpg" className='scrollImg'/>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide ">
                <div>
                  <img src="img/shp2.jpg" className='scrollImg'/>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide ">
                <div>
                  <img src="img/G1.jpg" className='scrollImg'/>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide ">
                <div>
                  <img src="img/shp3.jpg" className='scrollImg'/>
                </div>
                </SwiperSlide>
                              
        </Swiper>
            </div>
           <div className='socialIconCon'>
            <div className='socialIcon'>
            <a href="" className=''>Follow</a>
            <a href="" className=''>@Specscartuk</a>
            <a href="" className=''><FaInstagram color='gray' size={22}/></a>
            <a href="" className=''><FaFacebookF color='gray' size={22}/></a>
            <a href="" className=''><FaTwitter color='gray' size={22}/></a>
            <a href="" className=''> <FaYoutube color='gray' size={22}/></a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials