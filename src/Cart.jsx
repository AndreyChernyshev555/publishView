import React from "react";
import "./Cart.scss";
import Head from "./Components/Head/Head.jsx";
import Footer from "./Components/Footer.jsx";
import CartHead from "./Components/CartComps/CartHead/CartHead.jsx";
import CartGoods from "./Components/CartComps/CartGoods/CartGoods.jsx";

export default function Cart(props) {
    return (
        <div className="page">
            <Head />
            <div className="cart">
                Cart
                <CartHead />
                <CartGoods />
            </div>
            <Footer />
        </div>
    );
}
