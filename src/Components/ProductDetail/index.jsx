import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { LayoutCards } from "../../styled";
import CardProduct from "../CardProduct";
import CardSlide from "../CardSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { LayoutCardsProducts } from "../Products/styled";
import {
  BtnLayout,
  Button,
  ButtonBuy,
  CenterLayout,
  LayoutContentDetail,
  LayoutDetailInfo,
  LayoutImage,
  LayoutP,
  LayoutRecommended,
  LayoutText,
  SwiperImage,
} from "./styled";

const ProductDetail = (props) => {
  const { data } = useContext(DataContext);
  console.log(1, props.location.state);
  console.log(15, data.products[0].recommended);
  return (
    <LayoutP>
      <LayoutContentDetail>
        <LayoutImage>
          <SwiperImage navigation={true} className="mySwiper">
            <SwiperSlide>
              <img
                src={
                  data.products[parseInt(props.match.params.id) - 1]
                    .recommended[0].image
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  data.products[parseInt(props.match.params.id) - 1]
                    .recommended[0].imageRef1
                }
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={
                  data.products[parseInt(props.match.params.id) - 1]
                    .recommended[0].imageRef2
                }
                alt=""
              />
            </SwiperSlide>
          </SwiperImage>
        </LayoutImage>
        <LayoutDetailInfo>
          <LayoutText>
            <h4>
              {" "}
              Inicio{" "}
              {
                data.products[parseInt(props.match.params.id) - 1]
                  .recommended[0].type
              }
            </h4>
            <h1>
              {
                data.products[parseInt(props.match.params.id) - 1]
                  .recommended[0].title
              }
            </h1>
            <h4> SKU 00234 </h4>
            <h3>
              $
              {
                data.products[parseInt(props.match.params.id) - 1]
                  .recommended[0].currentPrice
              }
            </h3>
          </LayoutText>

          <BtnLayout>
            <Button>
              <h5> Añadir a Carrito</h5>
            </Button>
            <ButtonBuy>
              <h5> Comprar Ahora</h5>
            </ButtonBuy>
          </BtnLayout>
          <h2>
            {
              data.products[parseInt(props.match.params.id) - 1].recommended[0]
                .description
            }
          </h2>
        </LayoutDetailInfo>
      </LayoutContentDetail>
      <LayoutRecommended>
        <h1>También puedes complementar con estos productos</h1>
      </LayoutRecommended>
      <CenterLayout>
        <LayoutCardsProducts>
          {data.products[parseInt(props.match.params.id) - 1].recommended.map(
            (p) => (
              <CardProduct key={p.id} {...p} />
            )
          )}
        </LayoutCardsProducts>
      </CenterLayout>
    </LayoutP>
  );
};

export default ProductDetail;
