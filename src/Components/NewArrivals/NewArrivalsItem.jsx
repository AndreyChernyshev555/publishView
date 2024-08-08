import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import starIcon from "../../img/star.svg";
import * as actions from "../../Store/actions";

export default function NewArrivalsItem(props) {
    const rating = props.rating;
    let rateBlock = [];
    for (let i = 0; i < rating; i++) {
        rateBlock.push(<img src={starIcon} />);
    }

    const [buttonShow, setButtonShow] = useState(false);
    const handleHover = () => setButtonShow(!buttonShow);

    const visibility = typeof props.discount === "string" ? "block" : "none";

    const heightProportion = !window.matchMedia("screen and (max-width: 480px)")
        .matches
        ? 349 / 1920
        : props.type === "gridable"
        ? 540 / 1080
        : 720 / 1080;
    const widthProportion = !window.matchMedia("screen and (max-width: 480px)")
        .matches
        ? 262 / 1920
        : props.type === "gridable"
        ? 405 / 1080
        : 540 / 1080;

    const [goodsSize, setGoodsSize] = useState({
        height: heightProportion * window.innerWidth,
        width: widthProportion * window.innerWidth,
    });

    useEffect(() => {
        const resize = () => {
            setGoodsSize({
                height: heightProportion * window.innerWidth,
                width: widthProportion * window.innerWidth,
            });
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const dispatch = useDispatch();
    const cartInfo = {
        title: props.title,
        price: props.price,
        path: props.path
    };
    
    return (
        <div className="new-arrivals_goods-item">
            <div
                className="new-arrivals_img"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                style={{
                    width: `${goodsSize.width}px`,
                    height: `${goodsSize.height}px`,
                    backgroundImage: `url(${props.path})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="new-arrivals_img-info">
                    <div className="new-arrivals_new">NEW</div>
                    <div
                        className="new-arrivals_discount"
                        style={{ display: `${visibility}` }}
                    >
                        {props.discount}
                    </div>
                </div>
                <div
                    className="new-arrivals_add-button"
                    onClick={
                        () => {
                            dispatch(actions.addGoods(cartInfo));
                        }
                    }
                    style={{ opacity: buttonShow ? 1 : 0 }}
                >
                    Add to cart
                </div>
            </div>
            <div className="new-arrivals_description">
                <span className="new-arrivals_rating">{rateBlock}</span>
                <span className="new-arrivals_title">{props.title}</span>
                <div className="new-arrivals_price">
                    <span className="new-arrivals_price-act">
                        {props.price}
                    </span>
                    <span className="new-arrivals_price-old">
                        {props.oldPrice}
                    </span>
                </div>
            </div>
        </div>
    );
}
