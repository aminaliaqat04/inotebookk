import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, EffectCoverflow, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';

const About = () => {
  
  return (
    <>
      <Swiper 
        // effect={"coverflow"}
        modules={[Autoplay, Keyboard, EffectCoverflow, Pagination, Scrollbar, Zoom]}
        spaceBetween={0}
        slidesPerView={3}
        speed={1000}
        loop={true}
        grabCursor= {true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{delay: 0, disableOnInteraction: false}}
        breakpoints= {{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        
        
      >
        <SwiperSlide><img src={require('../assets/img1.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/img5.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/img2.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/img4.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/img3.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/img7.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/img6.jpg')} className="h-full" alt='notebook cover'/></SwiperSlide>
      </Swiper>
      <div className='text-center mt-10'> 
        <h1 className='text-indigo-800 text-4xl font-semibold uppercase'>Philosophy</h1>
        <i className="fa-solid fa-chevron-down animate-bounce text-2xl text-indigo-600 cursor-pointer mt-5" onClick={()=>{document.getElementById('philosophy-wrapper').scrollIntoView({ block: 'end',  behavior: 'smooth' })}}></i>
        </div>
      <div className='container mx-auto px-4'>
        <div id='philosophy-wrapper' className='text-center p-16 md:p-40 space-y-10'>
          <p className='text-xl'>All your notes, synced on all your devices. Get iNotebook now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
          <button className='bg-indigo-800 text-white font-semibold px-10 py-3 rounded animate-pulse'>Sign Up Now</button>
        </div>
      </div>
    </>
  )
}

export default About
