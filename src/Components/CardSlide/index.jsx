import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { SwiperLayout } from "./styled";
import SwiperCore, { Navigation } from "swiper";
import CardProduct from "../CardProduct";
import CardCoupon from "../CardCoupon";
SwiperCore.use([Navigation]);

const CardSlide = ({ cards, render }) => {
  console.log(25, cards);
  console.log(26, render);
  return (
    <div style={{ width: "100hw" }}>
      <SwiperLayout render={render} navigation={true} className="mySwiper">
        {render === 1 &&
          cards.map((p) => (
            <SwiperSlide key={p.id}>
              <CardProduct key={p.id} {...p}></CardProduct>{" "}
            </SwiperSlide>
          ))}

        {render === 2 &&
          cards.map((p) => (
            <SwiperSlide key={p.id}>
              <CardCoupon key={p.id} {...p}></CardCoupon>
            </SwiperSlide>
          ))}
      </SwiperLayout>
    </div>
  );
};

export default CardSlide;
