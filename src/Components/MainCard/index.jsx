import React from "react";
import { Formik, Form, Field } from "formik";

import {
  Button,
  CardImageAndSearch,
  FieldInput,
  FormStyled,
  MainTitle,
  SearchBarContent,
} from "./styled";

const MainCard = () => {
  const imagen = "/images/cake.png";
  return (
    <CardImageAndSearch url={imagen}>
      <SearchBarContent>
        <MainTitle>
          <h1> Tu pedido en la puerta de tu casa</h1>
          <h3>
            Disfrute todos nuestros productos saludables entregados en su puerta
            todo el día todos los días
          </h3>
        </MainTitle>
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          <FormStyled>
            <FieldInput name="search" placeholder="Busqueda"></FieldInput>
            <Button type="submit"> Buscar</Button>
          </FormStyled>
        </Formik>
      </SearchBarContent>
    </CardImageAndSearch>
  );
};

export default MainCard;
