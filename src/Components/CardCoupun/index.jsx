import React from "react";
import {
  ContentCouponLeft,
  ContentCouponRigth,
  LayoutCardCoupun,
} from "./styled";

const CardCoupun = () => {
  return (
    <LayoutCardCoupun>
      <ContentCouponLeft>
        <h1>GIFT</h1>
        <h3>COUPON</h3>
        <h4> LOREM IPSUM</h4>
        <h5>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit unde vel ut asperiores similique iusto quasi at natus.
          Saepe amet magnam fugiat praesentium .{" "}
        </h5>
      </ContentCouponLeft>
      <ContentCouponRigth>
        <h1>
          <strong>COMPANY</strong>NAME
        </h1>
        <h1>50%</h1>
        <h5>Lorem ipsum</h5>
      </ContentCouponRigth>
    </LayoutCardCoupun>
  );
};

export default CardCoupun;
