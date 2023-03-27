import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/stylesswiper.module.css";

// import required modules
import { Pagination } from "swiper";

import Image from "next/image";


export default function HomeSlider() {
    return (
      <>
      <div className="px-5 mt-4 md:mb-10 md:px-60 h-1/2">
        
      <Swiper
       
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" mySwiper"
      > 
        <SwiperSlide >
        
            <Image
              src="/images/slider-image-1.jpg"
              alt="Slider- Image"
              className="w-full"
              width={500}
              height={250}
            />
           
            </SwiperSlide>
        <SwiperSlide className="" >
        <Image
              src="/images/slider-image-2.jpg"
              alt="Slider- Image"
              className="w-full"
              width={500}
              height={250}
            />
        </SwiperSlide>
        <SwiperSlide className="" >
        <Image
              src="/images/slider-3.jpg"
              alt="Slider- Image"
              className="w-full"
              width={500}
              height={250}
            />
            </SwiperSlide>
       
      </Swiper>
      </div>
      </>
    )
}