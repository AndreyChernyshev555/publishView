import React from "react";
import PromoTimer from "./PromoTimer.jsx";
import "./TimePromo.scss";
import timePromoImg from "../../img/hurry.svg";

export default function TimePromo() {
    return (
        <div className="time-promotion">
            <div className="time-promotion_img" />
            <div className="time-promotion_content">
                <div className="time-promotion_header">PROMOTION</div>
                <div className="time-promotion_offer">Hurry up! 40% OFF</div>
                <div className="time-promotion_text">
                    Thousands of high tech are waiting for you
                </div>
                <PromoTimer />
                <div className="time-promotion_button">Shop now</div>
            </div>
        </div>
    );
}
