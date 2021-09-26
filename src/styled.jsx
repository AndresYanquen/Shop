import styled from "styled-components";

export const Layout = styled.div`
  font-family: "Roboto";
`;

export const LayoutCards = styled.div`
  display: grid;
  margin: 80px 5% 0px 5%;
  grid-template-columns: auto;
  grid-gap: 20px;
  @media (min-width: 760px) {
    margin: 60px 5% 0px 5%;
    grid-template-columns: auto;
    grid-template-rows: auto;
    display: grid;
    grid-template-areas:
      "header header"
      "aside asider ";
    & div:nth-of-type(1) {
      grid-area: header;
    }
    & div:nth-of-type(2) {
      grid-area: aside;
    }
    & div:nth-of-type(3) {
      grid-area: asider;
    }
  }
`;

export const LayoutSlide = styled.div`
  display: contents;
`;

export const LayoutCard = styled.div`
  margin: 80px 5% 0px 5%;
  @media (min-width: 760px) {
    display: grid;
  }
`;

export const LayoutCoupun = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LayoutFooter = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 510px;
  background: #181818;
`;
