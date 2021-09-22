import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { SwiperLayout } from "./styled";
import SwiperCore, { Navigation } from "swiper";
import CardProduct from "../CardProduct";
SwiperCore.use([Navigation]);

const CardSlide = ({ cards }) => {
  return (
    <div style={{ width: "100hw" }}>
      <SwiperLayout navigation={true} className="mySwiper">
        {cards.map((p) => (
          <SwiperSlide key={p.id}>
            <CardProduct key={p.id} {...p}></CardProduct>{" "}
          </SwiperSlide>
        ))}
      </SwiperLayout>
    </div>
  );
};

export default CardSlide;
