import React from "react";
import NewArrivalsItem from "./NewArrivalsItem.jsx";
import "./NewArrivals.scss";

export default function NewArrivals(props) {
    const gridable = props.type === "gridable" ? true : false;
    const goodsStyles =
        window.matchMedia("screen and (max-width: 480px)").matches && gridable
            ? {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "auto",
                  gridGap: "2%",
                  overflow: "hidden",
                  paddingBottom: "96px",
              }
            : { flexWrap: `${props.wrap}`, overflowX: `${props.overflow}` };

    const items = props.itemList.map((item) => (
        <NewArrivalsItem
            path={item.path}
            rating={item.rating}
            goods={item.goods}
            price={item.price}
            discount={item.discount}
            addFunc={props.addFunc}
            oldPrice={item.oldPrice}
            type={props.type}
        />
    ));
    return (
        <div className="new-arrivals">
            <div className="new-arrivals_text">
                <div className="new-arrivals_text-item1">{props.header}</div>
                <a className="new-arrivals_text-item2" href="https://dzen.ru">
                    More products &#8594;
                </a>
            </div>
            <div className="new-arrivals_goods" style={goodsStyles}>
                {items}
            </div>
        </div>
    );
}
