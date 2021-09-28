import styled from "styled-components";
import Card from "@mui/material/Card";

export const LayoutCardSlide = styled.div`
  width: 283px;
  height: 388px;
  display: flex;
  justify-content: center;
`;

export const CardItem = styled(Card)`
  img {
    border-radius: 5px;
    width: 268px;
    height: 211px;
    margin: 6px 6px 6px 6px;
  }
`;

export const ImgCake = styled.div`
  width: 270px;
  height: 210px;
`;

export const Text = styled.div`
  margin: 0px 2% 0px 2%;
  h1 {
    margin-top: 3px;
    font-size: 20px;
    font-weight: 500;
  }

  h3 {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 300;
    color: #989898;
    text-align: justify;
  }
  h5 {
    color: #bcbcbc;
    font-size: 13px;
    font-weight: 400;
  }
`;

export const Sales = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  color: black;
  margin: 10px 17px 7px 0px;
  display: inline-block;
  border-radius: 4px 4px 4px 4px;
  border: none;
  width: 140px;
  height: 34px;
  background: #3e3e3e;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);
  img {
    width: 16px;
    height: 16px;
  }
`;

export const ButtonPlace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 14px;
  }
`;

export const Prices = styled.div`
  h1 {
    color: #dfdfdf;
    text-decoration: line-through;
    font-size: 17px;
  }
  h2 {
    color: #e32929;
    font-size: 18px;
    font-weight: 500;
    font-size: 18px;
  }
`;
