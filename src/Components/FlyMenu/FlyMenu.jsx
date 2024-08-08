import React, { useState, useEffect } from "react";
import searchIcon from "../../img/icons/search.svg";
import "./FlyMenu.scss";
import showIcon from "../../img/icons/show.svg";
import { useNavigate } from "react-router-dom";

export default function FlyMenu(props) {
    const navigate = useNavigate();
    const widthProportion = 2 / 3;
    const heightProportion = 21 / 9;
    const [size, setSize] = useState({
        width: widthProportion * window.innerWidth,
        shadow: (1 - widthProportion) * window.innerWidth,
        height: heightProportion * window.innerWidth,
    });
    const [vertical, setVertical] = useState(0);
    useEffect(() => {
        const scrolling = () => {
            setVertical(window.scrollY);
        };
        window.addEventListener("scroll", scrolling);
        return () => {
            window.removeEventListener("scroll", scrolling);
        };
    }, []);

    useEffect(() => {
        const resize = () => {
            setSize({
                width: widthProportion * window.innerWidth,
                shadow: (1 - widthProportion) * window.innerWidth,
                height: heightProportion * window.innerWidth,
            });
        };
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
    return (
        <div
            className="fly-menu"
            style={{
                transform: `translateX(${size.width * props.displayParam}px)`,
                width: size.width,
                height: size.height,
                top: `${vertical}px`,
            }}
        >
            <div className="fly-menu_head">
                <div className="fly-menu_head-text">3legant.</div>
                <div className="fly-menu_head-close" onClick={props.hideClick}>
                    ✕
                </div>
            </div>
            <div className="fly-menu_search">
                <img className="fly-menu_search-img" src={searchIcon} />
                <input className="fly-menu_search-input" placeholder="Search" />
            </div>
            <div className="fly-menu_item" onClick={() => navigate("/home1")}>
                Home
            </div>
            <div className="fly-menu_item" onClick={() => navigate("/home2")}>
                Shop <img src={showIcon} />
            </div>
            <div className="fly-menu_item">
                Product <img src={showIcon} />
            </div>
            <div className="fly-menu_item">Contact Us</div>
        </div>
    );
}
