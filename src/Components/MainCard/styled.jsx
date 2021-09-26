import { Field, Form, Formik } from "formik";
import styled from "styled-components";

export const CardImageAndSearch = styled.div`
  width: 100%;
  padding-top: 110px;
  height: 300px;
  background-image: linear-gradient(rgba(5, 7, 12, 0.5), rgba(5, 7, 12, 0.5)),
    ${(props) => props.url && `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    height: 600px;
  }
`;

export const SearchBarContent = styled.div`
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    padding: 5px 10%;
    color: #ffffff;
    font-weight: 900;
    font-size: 36px;
    text-align: center;
  }
  h3 {
    font-weight: 400;
    color: #ffffff;
    padding: 5px 10%;
    text-align: center;
  }

  @media (min-width: 760px) {
    height: 100%;
    justify-content: center;
  }
`;

export const MainTitle = styled.div`
  padding-top: 60px;
  @media (min-width: 760px) {
    padding-top: 0px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldInput = styled(Field)`
  height: 40px;
  border-radius: 10px 0px 0px 10px;
  background-color: white;
  border: none;
  width: 60%;
  box-shadow: 3px 5px 17px 4px rgba(0, 0, 0, 0.69);
`;

export const Button = styled.button`
  color: white;
  display: inline-block;
  border-radius: 0px 10px 10px 0px;
  border: none;
  width: 110px;
  height: 40px;
  background: #1b1b1b;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);
`;
