import React from "react";
import "./Collection.scss";

export default function Collection(props) {
  const collectionHeight = window.matchMedia("screen and (max-width: 480px)")
    .matches
    ? "200vw"
    : "33.9vw";

  return (
    <div className="collection" style={{ height: collectionHeight }}>
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
