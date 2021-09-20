import "./App.css";
import Data from "./api/dummy.json";
import Header from "./Components/Header";
import { Layout, LayoutCard, LayoutCards, LayoutSlide } from "./styled";
import MainCard from "./Components/MainCard";
import PrincipalCards from "./Components/PrincipalCards";
import CardSlide from "./Components/CardSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@mui/material";
import CardProduct from "./Components/CardProduct";
function App() {
  console.log(Data);
  return (
    <Layout>
      <Header headerMsg={Data.PageInfo.headerMsg}> </Header>
      <MainCard></MainCard>
      <LayoutCards>
        {Data.products.map((p) => (
          <PrincipalCards key={p.id} {...p} />
        ))}
      </LayoutCards>
      <LayoutSlide>
        <CardSlide></CardSlide>
      </LayoutSlide>
      <LayoutCard>
        <CardProduct></CardProduct>
      </LayoutCard>
    </Layout>
  );
}

export default App;
