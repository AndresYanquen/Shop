import styled from "styled-components";

export const LayoutProducts = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleProduct = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
`;

export const LayoutButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: black;
  display: inline-block;
  border-radius: 4px 4px 4px 4px;
  border: none;
  width: 140px;
  height: 34px;
  margin: 10px 0px 0px 0px;
  background: #ffffff;
  box-shadow: 5px 7px 15px -2px rgba(0, 0, 0, 0.47);
  h5 {
    display: flex;
    justify-content: center;
    font-weight: 550;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const LayoutCardsProducts = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px 20px;
  }
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
