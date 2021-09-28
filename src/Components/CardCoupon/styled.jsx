import styled from "styled-components";

export const LayoutCardCoupun = styled.div`
  color: #2c2a29;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  margin-top: 20px;
  background-image: ${(props) => props.image && `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

export const ContentCouponLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;

  h1 {
    font-weight: 300;
    font-size: 55px;
  }
  h3 {
    font-weight: 600;
    font-size: 27px;
  }
  h4 {
    margin-top: 5px;
    font-weight: 600;
    font-size: 12px;
  }
  h5 {
    color: #5e5d5c;
    margin-top: 5px;
    font-weight: 500;
    font-size: 10px;
  }
`;

export const ContentCouponRigth = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 70px;
  margin-right: 8px;
  flex-direction: column;
  justify-content: flex-start;

  p {
    font-weight: 700;
    font-size: 15px;
  }

  h1 {
    font-size: 60px;
    font-weight: 700;
    margin-top: 8px;
  }

  h5 {
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 13px;
  }
`;
