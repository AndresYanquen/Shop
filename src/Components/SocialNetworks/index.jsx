import React from "react";
import { EnterpriseName, FootBar, Networks } from "./styled";

const SocialNetworks = ({ networks }) => {
  console.log(networks);
  return (
    <FootBar>
      <EnterpriseName> Sugar Cake Por Tu-ecommerce.cl</EnterpriseName>
      <Networks>
        <a href={networks.facebook}>
          <img src="icons/facebook.svg" alt="facebook" />
        </a>
        <a href={networks.instagram}>
          <img src="icons/instagram.svg" alt="instagram" />
        </a>
        <a href={networks.twitter}>
          <img src="icons/twitter.svg" alt="twitter" />
        </a>
        <a href={networks.linkedin}>
          <img src="icons/linkedin.svg" alt="linkedin" />
        </a>
      </Networks>
    </FootBar>
  );
};

export default SocialNetworks;
