import React from "react";
import { EnterpriseName, FootBar, Networks } from "./styled";

const SocialNetworks = () => {
  return (
    <FootBar>
      <EnterpriseName> Sugar Cake Por Tu-ecommerce.cl</EnterpriseName>
      <Networks>
        <img src="icons/facebook.svg" alt="facebook" />
        <img src="icons/instagram.svg" alt="facebook" />
        <img src="icons/twitter.svg" alt="facebook" />
        <img src="icons/linkedin.svg" alt="facebook" />
      </Networks>
    </FootBar>
  );
};

export default SocialNetworks;
