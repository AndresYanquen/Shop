import styled from "styled-components";

export const ContainerFooter = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0px 0px 50px;
  h1 {
    font-weight: 500;
    font-size: 18px;
  }
  h2 {
    margin-top: 30px;
    font-weight: 500;
    font-size: 18px;
  }

  img {
    position: relative;
    margin-top: 10px;
  }
  a {
    margin-top: 10px;
    text-decoration: none;
    color: white;
  }
`;

export const CreditCards = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;
