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

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
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

export const MediosPago = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Enlaces = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const ServicioCliente = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;
