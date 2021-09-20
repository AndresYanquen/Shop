import React, { useState } from "react";
import {
  HeaderMessage,
  MenuHeader,
  MenuIconW,
  SideItems,
  SideMenu,
  SubMenus,
} from "./styled";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ headerMsg }) => {
  const [openclose, setOpenClose] = useState(false);
  const handleSideBar = () => {
    if (openclose === true) {
      setOpenClose(false);
      console.log(openclose);
    } else {
      setOpenClose(true);
      console.log(openclose);
    }
  };
  return (
    <div>
      <HeaderMessage>
        <p>{headerMsg} </p>
      </HeaderMessage>
      <MenuHeader>
        <img src="icons/logo.svg" alt="logo" />
        <SideItems>
          <MenuIconW onClick={() => handleSideBar()}></MenuIconW>
          <img src="icons/profileImage.svg" alt="imageProfile" />
        </SideItems>
      </MenuHeader>
      <SideMenu openclose={openclose}>
        <SubMenus>
          <ul>
            <li>
              <a href={"Hola"}>Ver cupones </a>
            </li>
            <li>
              <a href={"Hola"}> Productos</a>
            </li>
            <li>
              <a href={"Hola"}>Los más Vendidos </a>
            </li>
            <li>
              <a href={"Hola"}>Ayuda</a>
            </li>
          </ul>
        </SubMenus>
      </SideMenu>
    </div>
  );
};

export default Header;
