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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Products from "./Components/Products";
import CardCoupon from "./Components/CardCoupon";
import SocialNetworks from "./Components/SocialNetworks";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/ProductDetail";
import { DataProvider } from "./context/DataContext";
function App() {
  //console.log(Data);

  return (
    <DataProvider>
      <Router>
        <Layout>
          <Header headerMsg={Data.PageInfo.headerMsg}> </Header>
          <Switch>
            <Route path="/" exact>
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
            </Route>
            <Route
              path="/detail/:id/:itemSelected/:title"
              component={ProductDetail}
            ></Route>
          </Switch>
          <LayoutFooter>
            <Footer links={Data.links}></Footer>
          </LayoutFooter>
          <SocialNetworks networks={Data.networks}></SocialNetworks>
        </Layout>
      </Router>
    </DataProvider>
  );
}

export default App;
