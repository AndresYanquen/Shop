import React from "react";
import {
  ContentCouponLeft,
  ContentCouponRigth,
  LayoutCardCoupun,
} from "./styled";

const CardCoupon = ({
  id,
  subtitle,
  description,
  companyname,
  percentage,
  finalRef,
}) => {
  const image = "/images/background-gif.png";
  return (
    <LayoutCardCoupun image={image}>
      <ContentCouponLeft>
        <h1>GIFT</h1>
        <h3>COUPON</h3>
        <h4> {subtitle}</h4>
        <h5>{description}</h5>
      </ContentCouponLeft>
      <ContentCouponRigth>
        <p>{companyname}</p>
        <h1>{percentage}</h1>
        <h5>{finalRef}</h5>
      </ContentCouponRigth>
    </LayoutCardCoupun>
  );
};

export default CardCoupon;
