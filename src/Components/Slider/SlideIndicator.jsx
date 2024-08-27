import React from "react";

export default function SlideIndicator(props) {
  let lights = [];
  for (let i = 0; i < props.amount; i++) {
    if (i == props.light)
      lights.push(<div className="slide_indicator-light"></div>);
    else lights.push(<div className="slide_indicator-shadow"></div>);
  }
  return <div className="slide_indicator">{lights}</div>;
}
