import "./App.css";
import Data from "./api/dummy.json";
import Header from "./Components/Header";
import { Layout, LayoutCards, LayoutCoupun, LayoutSlide } from "./styled";
import MainCard from "./Components/MainCard";
import PrincipalCards from "./Components/PrincipalCards";
import CardSlide from "./Components/CardSlide";
import Products from "./Components/Products";
import CardCoupon from "./Components/CardCoupon";
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
    </Layout>
  );
}

export default App;
