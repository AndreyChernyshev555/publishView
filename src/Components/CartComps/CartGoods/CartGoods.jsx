import React from "react";
import { useSelector } from "react-redux";
import "./CartGoods.scss";

export default function CartGoods() {
    const cartItems = useSelector(state => state);
    let cartItemsHTML = [];
    for (let i = 0; i < cartItems.length; i++) {
        cartItemsHTML.push(
            <div className="cart-goods_item">
                <div
                    className="cart-goods_item-img"
                    style={{
                        background: `url(${cartItems[i].path})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                </div>
                <div className="cart-goods_item-text">
                    <div className="cart-goods_item-name">
                        {cartItems[i].title}
                    </div>
                    <div className="cart-goods_item-color">
                        Color: default
                    </div>
                    <div className="cart-goods_item-remove">
                        x Remove
                    </div>
                </div>
            </div>
        );
        cartItemsHTML.push(
            <div className="cart-goods_item-quantity">
                <div className="cart-goods_item-button">-</div>
                <div className="cart-goods_item-quantity-value">1</div>
                <div className="cart-goods_item-button">+</div>
            </div>
        );
        cartItemsHTML.push(
            <div className="cart-goods_item-price">
                {cartItems[i].price}
            </div>
        );
        cartItemsHTML.push(
            <div className="cart-goods_item-subtotal">
                {cartItems[i].price}
            </div>
        );
    }
    return (
        <div className="cart-goods">
            <div className="cart-goods_col-name">Product</div>
            <div className="cart-goods_col-name">Quantity</div>
            <div className="cart-goods_col-name">Price</div>
            <div className="cart-goods_col-name">Subtotal</div>
            {cartItemsHTML}
        </div>
    );
}
