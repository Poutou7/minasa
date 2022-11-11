import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';

import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'

import './preview.css';
import Preview from './Preview';

SwiperCore.use([Navigation, Pagination]);


const Previews = () => {
  return (
    <div className='content'>
      <h1 className='title-head'>شركائنا في النجاح</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><Preview /></SwiperSlide>
        <SwiperSlide><Preview /></SwiperSlide>
        <SwiperSlide><Preview /></SwiperSlide>
        <SwiperSlide><Preview /></SwiperSlide>
        <SwiperSlide><Preview /></SwiperSlide>
        <SwiperSlide><Preview /></SwiperSlide>
      </Swiper>
    </div>

  )
}

export default Previews
