import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperLayout = styled(Swiper)`
  width: ${(props) => (props.render === 1 ? `300px` : `320px`)};
  height: ${(props) => (props.render === 1 ? `420px` : `200px`)};
  @media (min-width: 650px) {
    width: ${(props) => (props.render === 1 ? `600px` : `320px`)};
    height: ${(props) => (props.render === 1 ? `420px` : `200px`)};
  }
  @media (min-width: 1050px) {
    width: ${(props) => (props.render === 1 ? `1050px` : `1050px`)};
    height: ${(props) => (props.render === 1 ? `420px` : `200px`)};
  }
`;
