import React from "react";
import "./Footer.scss";
import instagramIcon from "../img/icons/instagram.svg"
import facebookIcon from "../img/icons/facebook.svg"
import youtubeIcon from "../img/icons/youtube.svg"
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_navigation">
        <div className="footer_company">
          <div className="footer_company-logo">
            3legant<span>.</span>
          </div>
          <div className="footer_company-caption">Gift & Decoration Store</div>
        </div>
        <div className="footer_nav-buttons">
          <span>Home</span>
          <span>Shop</span>
          <span>Product</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div className="footer_sources">
        <div className="footer_copyright">
          <div className="footer_copyright-text">
            Copyright © 2023 3legant. All rights reserved
          </div>
          <div className="footer_copyright-policy">Privacy Policy</div>
          <div className="footer_copyright-terms">Terms of Use</div>
        </div>
        <div className="footer_social">
          <img src={instagramIcon} />
          <img src={facebookIcon} />
          <img src={youtubeIcon} />
        </div>
      </div>
    </div>
  );
}
