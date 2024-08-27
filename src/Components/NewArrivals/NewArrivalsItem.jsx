import React, { useState } from "react";
import { useDispatch } from "react-redux";
import starIcon from "../../img/star.svg";
import * as actions from "../../Store/actions";

export default function NewArrivalsItem(props) {
  const rating = props.rating;
  let rateBlock = [];
  for (let i = 0; i < rating; i++) {
    rateBlock.push(<img src={starIcon} />);
  }

  const [buttonShow, setButtonShow] = useState(false);
  const handleHover = () => setButtonShow(!buttonShow);

  const visibility = typeof props.discount === "string" ? "block" : "none";

  const newArrivalsHeight = !window.matchMedia("screen and (max-width: 480px)")
    .matches
    ? "18.7vw"
    : props.type === "gridable"
      ? "50vw"
      : "66.7vw";
  const newArrivalsWidth = !window.matchMedia("screen and (max-width: 480px)")
    .matches
    ? "13.6vw"
    : props.type === "gridable"
      ? "37.5vw"
      : "50vw";

  const dispatch = useDispatch();
  const cartInfo = {
    title: props.title,
    price: props.price,
    path: props.path,
  };

  return (
    <div className="new-arrivals_goods-item">
      <div
        className="new-arrivals_img"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{
          width: newArrivalsWidth,
          height: newArrivalsHeight,
          backgroundImage: `url(${props.path})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="new-arrivals_img-info">
          <div className="new-arrivals_new">NEW</div>
          <div
            className="new-arrivals_discount"
            style={{ display: `${visibility}` }}
          >
            {props.discount}
          </div>
        </div>
        <div
          className="new-arrivals_add-button"
          onClick={() => {
            dispatch(actions.addGoods(cartInfo));
          }}
          style={{ opacity: buttonShow ? 1 : 0 }}
        >
          Add to cart
        </div>
      </div>
      <div className="new-arrivals_description">
        <span className="new-arrivals_rating">{rateBlock}</span>
        <span className="new-arrivals_title">{props.title}</span>
        <div className="new-arrivals_price">
          <span className="new-arrivals_price-act">{props.price}</span>
          <span className="new-arrivals_price-old">{props.oldPrice}</span>
        </div>
      </div>
    </div>
  );
}
