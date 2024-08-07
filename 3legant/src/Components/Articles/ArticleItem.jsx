import React from "react";

export default function ArticleItem(props) {
  return (
    <div className="articles_item">
      <img className="articles_img" src={props.path} />
      <span className="articles_name">{props.label}</span>
      <a className="articles_read" href="https://dzen.ru">
        Read More &#8594;
      </a>
    </div>
  );
}
