import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BoxBottom, BoxTop, Button, CardLayout, PriceOff } from "./styled";

const PrincipalCards = (props) => {
  console.log(props);
  return (
    <CardLayout url={props.image}>
      <BoxTop>
        <h1>{props.title} </h1>
      </BoxTop>
      <BoxBottom>
        <PriceOff>
          <h2> $19.990</h2>
          <h1>$19.990</h1>
        </PriceOff>
        <Button> Ver Productos</Button>
      </BoxBottom>
    </CardLayout>
  );
};

export default PrincipalCards;
