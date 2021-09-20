import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  CardItem,
  ImgCake,
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
  descrption,
  beforePrice,
  currentPrice,
}) => {
  return (
    <LayoutCardSlide>
      <CardItem>
        <img src="images/singleCake.png" alt="singleCake" />{" "}
        <Text>
          <h5>/Tortas</h5>
          <h1>Tortas Keto </h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et nibh
            semper nibh congue arcu...
          </h3>
          <Sales>
            <Prices>
              <h1>23.000</h1>
              <h2>19.000</h2>
            </Prices>
            <Button>
              <ButtonPlace>
                <img src="icons/locker.svg" alt="locker" /> <h1> Comprar </h1>
              </ButtonPlace>
            </Button>
          </Sales>
        </Text>
      </CardItem>
    </LayoutCardSlide>
  );
};

export default CardProduct;
