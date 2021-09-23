import React from "react";
import {
  ContentCouponLeft,
  ContentCouponRigth,
  LayoutCardCoupun,
} from "./styled";

const CardCoupon = ({ coupon }) => {
  const image = "/images/background-gif.png";
  console.log(coupon);
  return (
    <LayoutCardCoupun image={image}>
      <ContentCouponLeft>
        <h1>GIFT</h1>
        <h3>COUPON</h3>
        <h4> LOREM IPSUM</h4>
        <h5>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit unde vel ut asperiores..{" "}
        </h5>
      </ContentCouponLeft>
      <ContentCouponRigth>
        <p>COMPANYNAME</p>
        <h1>50%</h1>
        <h5>LOREM IPSUM</h5>
      </ContentCouponRigth>
    </LayoutCardCoupun>
  );
};

export default CardCoupon;
