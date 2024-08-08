import React, { useState, useEffect } from "react";
import "./Collection.scss";

export default function Collection(props) {
  const heightProportionMain = window.matchMedia(
    "screen and (max-width: 480px)"
  ).matches
    ? 2
    : 650 / 1920;

  const [sizeMain, setSizeMain] = useState(
    heightProportionMain * window.innerWidth
  );

  useEffect(() => {
    const resize = () => {
      setSizeMain(heightProportionMain * window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [heightProportionMain]);

  return (
    <div className="collection"
      style={{height: sizeMain,}}
    >
      <div
        className="collection_main"
        style={{
          background: `url(${props.goods[0].img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="collection_main-text"
          style={{
            top: `${props.goods[0].top}`,
            left: `${props.goods[0].left}`,
          }}
        >
          <div>{props.goods[0].title}</div>
          <div className="collection_link">{props.collOffer}</div>
        </div>
      </div>
      <div
        className="collection_sub-item"
        style={{
          background: `url(${props.goods[1].img})`,
          backgroundSize: "cover",
        }}
      >
        <div className="collection_sub-text">
          <div>{props.goods[1].title}</div>
          <div className="collection_link">{props.collOffer}</div>
        </div>
      </div>
      <div
        className="collection_sub-item"
        style={{
          background: `url(${props.goods[2].img})`,
          backgroundSize: "cover",
        }}
      >
        <div className="collection_sub-text">
          <div>{props.goods[2].title}</div>
          <div className="collection_link">{props.collOffer}</div>
        </div>
      </div>
    </div>
  );
}
