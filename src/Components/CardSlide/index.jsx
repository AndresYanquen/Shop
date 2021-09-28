import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { SwiperLayout } from "./styled";
import SwiperCore, { Navigation } from "swiper";
import CardProduct from "../CardProduct";
import CardCoupon from "../CardCoupon";
SwiperCore.use([Navigation]);

const CardSlide = ({ cards, render }) => {
  const renderNumber = (render) => {
    switch (render) {
      case 1:
        return 600;
        break;

      case 2:
        return 1050;
        break;

      default:
        break;
    }
  };
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <SwiperLayout
        breakpoints={{
          renderNumber: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          1050: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
          1240: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
          },
        }}
        render={render}
        navigation={true}
        className="mySwiper"
      >
        {render === 1 &&
          cards.map((p) => (
            <SwiperSlide key={p.id}>
              <CardProduct key={p.id} {...p}></CardProduct>
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
