import { Card } from "@mui/material";
import styled from "styled-components";

export const CardLayout = styled(Card)`
  width: 100%;
  height: 180px;
  background-image: ${(props) => props.url && `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 760px) {
    height: 412px;
  }
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  margin-left: 20px;
  width: 200px;
  height: 33px;
  background: #e32929;
  border-radius: 0px 0px 11px 11px;
  h1 {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const BoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PriceOff = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background: #030303;
  width: 100px;
  height: 50px;
  border-radius: 0 10px 0 0;
  h2 {
    color: #ffb422;
    margin-top: 3px;
    font-weight: 500;
    font-size: 16px;
    text-decoration: line-through;
  }
  h1 {
    margin-top: 3px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  color: black;
  margin: 0px 17px 7px 0px;
  display: inline-block;
  border-radius: 4px 4px 4px 4px;
  border: none;
  width: 140px;
  height: 34px;
  background: #ffffff;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);
`;
