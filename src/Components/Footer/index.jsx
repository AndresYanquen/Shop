import React from "react";
import { ContainerFooter, CreditCards } from "./styled";

const Footer = () => {
  return (
    <ContainerFooter>
      <h1> Medios de Pago </h1>
      <CreditCards>
        <img src="icons/paypal.svg" alt="paypal" />
        <img src="icons/visa.svg" alt="visa" />
        <img src="icons/mastercard.svg" alt="mastercard" />
        <img src="icons/stripe.svg" alt="stripe" />
        <img src="icons/gpay.svg" alt="gpay" />
        <img src="icons/dinnersclub.svg" alt="dinnersclub" />
      </CreditCards>
      <img src="icons/mercadopago.svg" alt="mercadopago" />
      <h1> Enlaces</h1>
      <a href="">¿Dónde estás mi pedido?</a>
      <a href="">Chat con un ejecutivo</a>

      <h2>Servicio al cliente</h2>

      <a href="">Necesito ayuda</a>
      <a href="">Políticas de Privacidad</a>
      <a href="">Términos y Condiciones</a>
      <a href="">Feedback o Reclamos</a>
    </ContainerFooter>
  );
};

export default Footer;
