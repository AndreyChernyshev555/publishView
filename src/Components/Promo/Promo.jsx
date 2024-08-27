import React, { useState } from "react";
import "./Promo.scss";

export default function Promo() {
  return (
    <div className="promo">
      <div className="promo_content">
        <div className="promo_main-text">
          Listen to the <span className="promo_main-text__accent">amazing</span>{" "}
          music sound.
        </div>
        <div className="promo_sub-text">Experience music like never before</div>
        <div className="promo_button">Shopping Now</div>
      </div>
    </div>
  );
}
