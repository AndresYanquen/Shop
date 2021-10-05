import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BoxBottom, BoxTop, Button, CardLayout, PriceOff } from "./styled";
import { Link } from "react-router-dom";

const PrincipalCards = (props) => {
  const itemSelected = "products";
  const routeData = {
    pathname: `/detail/${props.id}/${itemSelected}/${props.title}`,
    state: { test: true },
  };
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
        <Link to={routeData} target="_blank">
          <Button> Ver Productos</Button>
        </Link>
      </BoxBottom>
    </CardLayout>
  );
};

export default PrincipalCards;
