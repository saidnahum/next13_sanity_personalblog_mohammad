'use client'

import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';

/// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

import bannerImgOne from "../public/images/bannerImgOne.jpg";
import bannerImgTwo from "../public/images/bannerImgTwo.jpg";
import bannerImgThree from "../public/images/bannerImgThree.jpg";
import bannerImgFour from "../public/images/bannerImgFour.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



export default () => {

  const swiperRef = useRef<SwiperCore>();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        //spaceBetween={50}
        slidesPerView={1}
        //navigation
        //autoplay
        className='h-full max-h-[600px] bg-primary'
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className='relative w-full h-[650px]'>
            <Image src={bannerImgOne} alt="hola" fill className="w-full h-full max-h-[600px] object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-full h-[650px]'>
            <Image src={bannerImgTwo} alt="hola" fill className="w-full h-full max-h-[600px] object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-full h-[650px]'>
            <Image src={bannerImgThree} alt="hola" fill className="w-full h-full max-h-[600px] object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative w-full h-[650px]'>
            <Image src={bannerImgFour} alt="hola" fill className="w-full h-full max-h-[600px] object-cover" />
          </div>
        </SwiperSlide>

        {/* Prev/Next Buttons */}
        <div>
          <div
            className="w-10 md:w-44 h-8 absolute bottom-32 z-30 left-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group  ">
              <span className="text-lg">
                <FaChevronLeft />
              </span>
              <span className="hidden md:block absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
                previous
              </span>
              <span className="hidden md:block absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
                previous
              </span>
            </div>
          </div>

          <div
            className="w-10 md:w-44 h-8 absolute bottom-32 z-30 right-10 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group  ">
              <span className="hidden md:block absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
                next
              </span>
              <span className="hidden md:block absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
                next
              </span>
              <span className="text-lg">
                <FaChevronRight />
              </span>
            </div>
          </div>
        </div>

      </Swiper>

      {/* <button className='text-xl text-white bg-gray-800 p-2' onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
      <button className='text-xl text-white bg-gray-800 p-2' onClick={() => swiperRef.current?.slideNext()}>Next</button> */}
    </>
  );
};