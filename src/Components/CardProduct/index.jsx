import React from "react";

import {
  CardItem,
  LayoutCardSlide,
  Sales,
  Text,
  Button,
  ButtonPlace,
  Prices,
} from "./styled";

const CardProduct = ({
  type,
  title,
  description,
  beforePrice,
  currentPrice,
  image,
  gotobuy,
}) => {
  return (
    <LayoutCardSlide>
      <CardItem>
        <img src={image} alt="singleCake" />
        <Text>
          <h5>{type}</h5>
          <h1>{title} </h1>
          <h3>{description}</h3>
          <Sales>
            <Prices>
              <h1>{beforePrice}</h1>
              <h2>{currentPrice}</h2>
            </Prices>
            <a href={gotobuy}>
              <Button>
                <ButtonPlace>
                  <img src="icons/locker.svg" alt="locker" /> <h1> Comprar </h1>
                </ButtonPlace>
              </Button>
            </a>
          </Sales>
        </Text>
      </CardItem>
    </LayoutCardSlide>
  );
};

export default CardProduct;
