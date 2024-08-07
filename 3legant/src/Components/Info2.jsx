import React from "react";
import paste1 from "../img/paste1.png";

export default function Info2() {
  return (
    <div className="info2">
      <img className="info2_img" src={paste1} />
      <div className="info2_offer">
        <div className="info2_offer-sale-up">SALE UP TO 35% OFF</div>
        <div className="info2_offer-head">HUNDREDS of New lower prices!</div>
        <div className="info2_offer-desc">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </div>
        <div className="info2_offer-link">
          <span>Shop Now &#8594;</span>
        </div>
      </div>
    </div>
  );
}
