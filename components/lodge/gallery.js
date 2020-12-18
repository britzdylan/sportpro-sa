// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useState } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
// Import Swiper styles
SwiperCore.use([Navigation, Pagination ]);

export default function Gallery({ content }) {

 const [ShowLightBox, setLightbox] = useState(false);

 function show() {
  setLightbox(!ShowLightBox);
 }

    return (
      <>
      <div className="w-full h-auto hidden lg:block">
         <SRLWrapper>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {content.map((item,index) => 
              <SwiperSlide key={index}><img onClick={show} src={item.src} width="100%" alt={item.title} title={item.title} loading="lazy" /></SwiperSlide>
          )}
        </Swiper>
        {/* {ShowLightBox === false ? null :  <Lightbox content={content} showFunc={show} /> } */}
        </SRLWrapper>
      </div>
      <div className="w-full h-auto block lg:hidden">
         <SRLWrapper>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {content.map((item,index) => 
              <SwiperSlide key={index}><img onClick={show} src={item.src} width="100%" alt={item.title} title={item.title} loading="lazy" /></SwiperSlide>
          )}
        </Swiper>
        {/* {ShowLightBox === false ? null :  <Lightbox content={content} showFunc={show} /> } */}
        </SRLWrapper>
      </div>
      </>
    );
  };