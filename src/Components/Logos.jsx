import React from "react";
import teamLogos from "../img/team_logos/teamLogos.js";

export default function Logos() {
  let images = [];
  for (let i = 0; i < 6; i++) {
    const address = teamLogos[i];
    images.push(
      <div
        className="logos_item"
        style={{
          backgroundImage: `url(${address})`,
          backgroundSize: "cover",
          height: `3.125vw`,
        }}
      ></div>,
    );
  }
  return <div className="logos">{images}</div>;
}
