import React, { useState } from "react";
import "./CartHead.scss";

export default function CartHead() {
  const [activeElement, setActiveElement] = useState(0);
  const itemList = [
    { num: 1, txt: "Order list" },
    { num: 2, txt: "Checkout details" },
    { num: 3, txt: "Order complete" },
  ];
  let itemsHTML = [];
  for (let i = 0; i < itemList.length; i++) {
    let color = i == activeElement ? "black" : "#B1B5C3";
    itemsHTML.push(
      <div
        className="cart-head_item"
        style={{
          borderBottom: i == activeElement ? "2px solid black" : "none",
        }}
      >
        <div
          className="cart-head_num"
          style={{
            backgroundColor: color,
          }}
        >
          {itemList[i].num}
        </div>
        <div
          className="cart-head_text"
          style={{
            color: color,
          }}
        >
          {itemList[i].txt}
        </div>
      </div>,
    );
  }

  return <div className="cart-head">{itemsHTML}</div>;
}
