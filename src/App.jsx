import "./App.css";
import Data from "./api/dummy.json";
import Header from "./Components/Header";
import {
  Layout,
  LayoutCards,
  LayoutCoupun,
  LayoutFooter,
  LayoutSlide,
} from "./styled";
import MainCard from "./Components/MainCard";
import PrincipalCards from "./Components/PrincipalCards";
import CardSlide from "./Components/CardSlide";
import Products from "./Components/Products";
import CardCoupon from "./Components/CardCoupon";
import SocialNetworks from "./Components/SocialNetworks";
import Footer from "./Components/Footer";
function App() {
  //console.log(Data);

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
        <CardSlide cards={Data.recommended} render={1}></CardSlide>
      </LayoutSlide>
      <Products classes={Data.classes}></Products>
      <LayoutCoupun>
        <LayoutSlide>
          <CardSlide cards={Data.coupons} render={2}></CardSlide>
        </LayoutSlide>
      </LayoutCoupun>
      <LayoutFooter>
        <Footer links={Data.links}></Footer>
      </LayoutFooter>
      <SocialNetworks networks={Data.networks}></SocialNetworks>
    </Layout>
  );
}

export default App;
