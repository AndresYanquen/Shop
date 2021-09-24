import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperLayout = styled(Swiper)`
  width: 300px;
  height: ${(props) => (props.render === 1 ? `420px` : `200px`)};
`;
