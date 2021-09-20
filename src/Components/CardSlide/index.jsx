import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { SwipeContainer, SwiperLayout, SwiperSlideLayout } from "./styled";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const CardSlide = () => {
  return (
    <div style={{ width: "100hw", background: "gray" }}>
      <SwiperLayout navigation={true} className="mySwiper">
        <SwiperSlide>
          <h1>Slide 1</h1>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </SwiperLayout>
    </div>
  );
};

export default CardSlide;
