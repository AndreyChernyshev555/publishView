import React from "react";
import "./Newsfeed.scss";
import item0 from "../../img/newsfeed/item0.svg";
import item1 from "../../img/newsfeed/item1.svg";
import item2 from "../../img/newsfeed/item2.svg";
import item3 from "../../img/newsfeed/item3.svg";

const images = [item0, item1, item2, item3];
const imageBlock = images.map((image) => <img src={image} />);

export default function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed_text">
        <div className="newsfeed_text1">Newsfeed</div>
        <div className="newsfeed_text2">Instagram</div>
        <div className="newsfeed_text3">
          Follow us on social media for more discount & promotions
        </div>
        <div className="newsfeed_text4">@3legant_official</div>
      </div>
      <div className="newsfeed_images">{imageBlock}</div>
    </div>
  );
}
