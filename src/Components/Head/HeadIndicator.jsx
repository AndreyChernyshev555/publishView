import React from "react";

export default function HeadIndicator(props) {
  return (
    <div className="head_indicator" style={{display: (props.amount > 0) ? 'block' : 'none'}}>
        {props.amount}
    </div>
  );
}
