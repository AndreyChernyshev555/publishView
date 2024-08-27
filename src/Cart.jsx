import React, { useState, useEffect } from "react";
import "./Cart.scss";
import FlyMenu from "./Components/FlyMenu/FlyMenu.jsx";
import Head from "./Components/Head/Head.jsx";
import Footer from "./Components/Footer.jsx";
import CartHead from "./Components/CartComps/CartHead/CartHead.jsx";
import CartGoods from "./Components/CartComps/CartGoods/CartGoods.jsx";
import CartSummary from "./Components/CartComps/CartSummary/CartSummary.jsx";

export default function Cart(props) {
  const [flyMenu, setFlyMenu] = useState(-1.2);
  const showFlyMenu = () => {
    setFlyMenu(0);
  };
  const hideFlyMenu = () => {
    setFlyMenu(-1.2);
  };
  useEffect(() => {
    document.body.style.overflow = flyMenu === 0 ? "hidden" : "visible";
  });
  return (
    <div>
      <FlyMenu displayParam={flyMenu} hideClick={hideFlyMenu} />
      <Head
        headStyle={{
          backgroundColor: "white",
          color: "#6c7275",
        }}
        showClick={showFlyMenu}
      />
      <div className="cart">
        <div className="cart-text">Cart</div>
        <CartHead />
        <div className="cart-content">
          <CartGoods />
          <CartSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}
