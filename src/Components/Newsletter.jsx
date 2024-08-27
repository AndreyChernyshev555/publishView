import React from "react";
import emailIcon from "../img/icons/email.svg";

export default function Newsletter(props) {
  const backgroundImg = window.matchMedia("screen and (max-width: 480px)")
    .matches
    ? "none"
    : `url(${props.background})`;
  return (
    <div className="newsletter" style={{ backgroundImage: backgroundImg }}>
      <div className="newsletter_block">
        <div className="newsletter_text">
          <div className="newsletter_header">Join Our Nesletter</div>
          <div className="newsletter_desc">
            Sign up for deals, new products and promotions
          </div>
        </div>
        <div className="newsletter_form">
          <div className="newsletter_form-left">
            <img src={emailIcon} />
            <input
              className="newsletter_form-input"
              placeholder="Email adress"
              type="email"
            />
          </div>
          <span className="newsletter_form-right">Signup</span>
        </div>
      </div>
    </div>
  );
}
