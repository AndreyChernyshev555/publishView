import React from "react";
import "./Pros.scss";
import fastIcon from "../../img/icons/fast_delivery.svg";
import moneyIcon from "../../img/icons/money.svg";
import lockIcon from "../../img/icons/lock.svg";
import callIcon from "../../img/icons/call.svg";

export default function Pros() {
  return (
    <div className="pros">
      <div className="pros_item">
        <img className="pros_ico" src={fastIcon} />
        <div className="pros_text">
          <span className="pros_main">Free Shipping</span>
          <span className="pros_sub">Order above $200</span>
        </div>
      </div>
      <div className="pros_item">
        <img className="pros_ico" src={moneyIcon} />
        <div className="pros_text">
          <span className="pros_main">Money-back</span>
          <span className="pros_sub">30 days guarantee</span>
        </div>
      </div>
      <div className="pros_item">
        <img className="pros_ico" src={lockIcon} />
        <div className="pros_text">
          <span className="pros_main">Secure Payments</span>
          <span className="pros_sub">Secured by Stripe</span>
        </div>
      </div>
      <div className="pros_item">
        <img className="pros_ico" src={callIcon} />
        <div className="pros_text">
          <span className="pros_main">24/7 Support</span>
          <span className="pros_sub">Phone and Email support</span>
        </div>
      </div>
    </div>
  );
}
