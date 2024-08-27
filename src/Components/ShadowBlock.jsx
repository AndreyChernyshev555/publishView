import React from "react";

export default function ShadowBlock(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "2560px",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        position: "absolute",
        zIndex: "40",
        content: " ",
        display: props.displayParam == 0 ? "block" : "none",
      }}
    ></div>
  );
}
