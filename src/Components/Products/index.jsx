import React, { useState } from "react";
import CardProduct from "../CardProduct";
import {
  Button,
  LayoutButtons,
  LayoutCardsProducts,
  LayoutProducts,
  TitleProduct,
} from "./styled";

const Products = ({ classes }) => {
  const [products, setProducts] = useState(1);

  const changeProducts = (typeProduct) => {
    setProducts(typeProduct);
    console.log(typeProduct);
  };
  return (
    <div>
      <LayoutProducts>
        <TitleProduct>
          <h5>PRODUCTOS </h5>
        </TitleProduct>
        <LayoutButtons>
          <Button onClick={() => changeProducts(1)}>
            <h5>POSTRES</h5>
          </Button>
          <Button onClick={() => changeProducts(2)}>
            <h5>ACEITES</h5>
          </Button>
          <Button onClick={() => changeProducts(3)}>
            <h5> FRUTOS SECOS</h5>
          </Button>
          <Button onClick={() => changeProducts(4)}>
            <h5>PACKS</h5>
          </Button>
        </LayoutButtons>
        <LayoutCardsProducts>
          {products === 1 &&
            classes[0].postres.map((p) => (
              <CardProduct
                key={p.id}
                type={p.type}
                title={p.title}
                description={p.description}
                beforePrice={p.beforePrice}
                currentPrice={p.currentPrice}
                image={p.image}
                gotobuy={p.gotobuy}
              ></CardProduct>
            ))}
          {products === 2 &&
            classes[1].aceites.map((p) => (
              <CardProduct
                key={p.id}
                type={p.type}
                title={p.title}
                description={p.description}
                beforePrice={p.beforePrice}
                currentPrice={p.currentPrice}
                image={p.image}
                gotobuy={p.gotobuy}
              ></CardProduct>
            ))}

          {products === 3 &&
            classes[2].frutos_secos.map((p) => (
              <CardProduct
                key={p.id}
                type={p.type}
                title={p.title}
                description={p.description}
                beforePrice={p.beforePrice}
                currentPrice={p.currentPrice}
                image={p.image}
                gotobuy={p.gotobuy}
              ></CardProduct>
            ))}

          {products === 4 &&
            classes[3].packs.map((p) => (
              <CardProduct
                key={p.id}
                type={p.type}
                title={p.title}
                description={p.description}
                beforePrice={p.beforePrice}
                currentPrice={p.currentPrice}
                image={p.image}
                gotobuy={p.gotobuy}
              ></CardProduct>
            ))}
        </LayoutCardsProducts>
      </LayoutProducts>
    </div>
  );
};

export default Products;
