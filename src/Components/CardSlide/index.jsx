import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { SwipeContainer, SwiperLayout, SwiperSlideLayout } from "./styled";
import SwiperCore, { Navigation } from "swiper";
import CardProduct from "../CardProduct";
SwiperCore.use([Navigation]);

const CardSlide = () => {
  return (
    <div style={{ width: "100hw" }}>
      <SwiperLayout navigation={true} className="mySwiper">
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct></CardProduct>
        </SwiperSlide>
      </SwiperLayout>
    </div>
  );
};

export default CardSlide;
