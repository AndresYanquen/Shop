import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { LayoutCards } from "../../styled";
import CardProduct from "../CardProduct";
import { LayoutCardsProducts } from "../Products/styled";
import {
  Button,
  ButtonBuy,
  CenterLayout,
  LayoutContentDetail,
  LayoutDetailInfo,
  LayoutImage,
  LayoutP,
  LayoutRecommended,
} from "./styled";

const ProductDetail = (props) => {
  const { data } = useContext(DataContext);
  console.log(parseInt(props.match.params.id));
  console.log(15, data.products[0].recommended);
  return (
    <LayoutP>
      <LayoutContentDetail>
        <LayoutImage>
          <img
            src="images/tortilla_chocolate.png"
            alt="tortilla de chocolate"
          />
        </LayoutImage>
        <LayoutDetailInfo>
          <h4> INICIO / TORTAS / TORTA CHOCOLATE FRUTILLA</h4>
          <h1>Torta Chocolate Frutilla</h1>
          <h4> SKU 00234 </h4>
          <h3>$ 19.990</h3>
          <Button>
            <h5> Añadir a Carrito</h5>
          </Button>
          <ButtonBuy>
            <h5> Añadir a Carrito</h5>
          </ButtonBuy>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fames eget suscipit facilisis senectus. Accumsan odio enim est,
            faucibus egestas vitae semper commodo vestibulum. Diam adipiscing
            diam nunc faucibus facilisis. Congue leo elementum fringilla lectus
            scelerisque leo.
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
