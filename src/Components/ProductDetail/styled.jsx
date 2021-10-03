import styled from "styled-components";

export const LayoutP = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
`;

export const LayoutContentDetail = styled.div`
  width: 100%;
  height: auto;
  padding-top: 140px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-self: center;
    align-self: center;
  }
`;

export const LayoutImage = styled.div`
  img {
    width: 300px;
    height: 210px;
  }
`;

export const LayoutDetailInfo = styled.div`
  width: 90%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    color: gray;
    font-weight: 700;
    font-size: 10px;
  }
  h1 {
    color: #252525;
    font-weight: 500;
    font-size: 30px;
    text-align: left;
  }
  h3 {
    color: #e32929;
    font-weight: 300;
    font-size: 30px;
    line-height: 56.25px;
  }

  h2 {
    width: 80%;
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    text-align: justify;
  }
  @media (min-width: 700px) {
    width: 700px;
  }
`;

export const Button = styled.button`
  color: white;
  margin: 0px 17px 7px 0px;
  display: inline-block;
  border-radius: 4px 4px 4px 4px;
  border: none;
  width: 228px;
  height: 50px;
  background: black;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);
  h5 {
    font-size: 11px;
    font-weight: 700;
  }
`;

export const ButtonBuy = styled.button`
  color: white;
  margin: 0px 17px 7px 0px;
  display: inline-block;
  border-radius: 4px 4px 4px 4px;
  border: none;
  width: 228px;
  height: 50px;
  background: #e32929;
  box-shadow: 0px 9px 12px 1px rgba(0, 0, 0, 0.64);
  h5 {
    font-size: 11px;
    font-weight: 700;
  }
`;

export const LayoutRecommended = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 400;
    font-size: 24px;
    text-align: center;
  }
`;

export const CenterLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
