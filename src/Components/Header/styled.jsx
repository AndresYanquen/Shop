import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

export const HeaderMessage = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e32929;
  p {
    color: white;
    font-weight: 700;
    padding: 0px 15px;
    text-align: center;
    font-size: 11px;
  }
`;

export const MenuHeader = styled.div`
  height: 67px;
  background-color: #1b1b1b;
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
`;

export const SideItems = styled.div`
  display: flex;
  align-items: center;

  margin: 0px 10px;
`;

export const MenuIconW = styled(MenuIcon)`
  color: white;
  margin: 0px 10px;
`;

export const SideMenu = styled.div`
  position: fixed;
  width: 100%;
  overflow-x: hidden;
  color: white;
  opacity: ${(props) => (props.openclose ? "1" : "0")};
  right: ${(props) => (props.openclose ? "0" : "-100%")};
  justify-content: center;
  height: 100vh;
  background-color: #1b1b1b;
  transition: all 0.4s ease-in;
  z-index: 100;
`;

export const SubMenus = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 10px 20px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
