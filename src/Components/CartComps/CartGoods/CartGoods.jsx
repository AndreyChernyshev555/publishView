import React from "react";
import { useSelector, useState } from "react-redux";
import CartGoodsItem from "./CartGoodsItem.jsx";
import "./CartGoods.scss";

export default function CartGoods() {
  const cartItems = useSelector((state) => state);
  let cartItemsHTML = [];
  for (let i = 0; i < cartItems.length; i++) {
    cartItemsHTML.push(<CartGoodsItem item={cartItems[i]} />);
  }
  if (cartItemsHTML.length == 0) {
    cartItemsHTML.push(
      <div
        className="cart-goods_empty"
        style={{
          gridColumn: "span 4",
        }}
      >
        There are no items yet
      </div>,
    );
  }
  return (
    <div
      className="cart-goods"
      style={{ gridTemplateRows: `1fr repeat(${cartItems.length * 3}, 1fr)` }}
    >
      <div className="cart-goods_col-main">Product</div>
      <div className="cart-goods_col-name">Quantity</div>
      <div className="cart-goods_col-name">Price</div>
      <div className="cart-goods_col-name">Subtotal</div>
      {cartItemsHTML}
    </div>
  );
}
