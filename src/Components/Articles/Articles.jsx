import React from "react";
import ArticleItem from "./ArticleItem.jsx";
import article1 from "../../img/articles/article1.png";
import article2 from "../../img/articles/article2.png";
import article3 from "../../img/articles/article3.png";

const articleList = [
  {
    path: article1,
    label: "7 ways to decor your home"
  },
  {
    path: article2,
    label: "Kitchen organization"
  },
  {
    path: article3,
    label: "Decor your bedroom"
  }
]

export default function Articles() {
  const articleBlock = articleList.map(article => <ArticleItem path={article.path} label={article.label}/>);

  return (
    <div className="articles">
      <div className="articles_header">Articles</div>
      <div className="articles_block">
        {articleBlock}
      </div>
    </div>
  );
}
