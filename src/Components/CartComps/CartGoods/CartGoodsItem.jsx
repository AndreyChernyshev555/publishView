import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../Store/actions";

export default function CartGoodsItem(props) {
  const cartItem = props.item;
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-goods_item">
        <div
          className="cart-goods_item-img"
          style={{
            background: `url(${cartItem.path})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="cart-goods_item-text">
          <div className="cart-goods_item-name">{cartItem.title}</div>
          <div className="cart-goods_item-color">Color: default</div>
          <div
            className="cart-goods_item-remove"
            onClick={() => {
              dispatch(actions.removeGoods(cartItem));
            }}
          >
            ✕ Remove
          </div>
        </div>
      </div>
      <div className="cart-goods_item-quantity">
        <div
          className="cart-goods_item-button"
          onClick={() => {
            dispatch(actions.decrementGoods(cartItem));
          }}
        >
          -
        </div>
        <div className="cart-goods_item-quantity-value">{cartItem.amount}</div>
        <div
          className="cart-goods_item-button"
          onClick={() => {
            dispatch(actions.addGoods(cartItem));
          }}
        >
          +
        </div>
      </div>
      <div className="cart-goods_item-price">{cartItem.price}</div>
      <div className="cart-goods_item-subtotal">
        {`$${(cartItem.price.slice(1) * cartItem.amount).toFixed(2)}`}
      </div>
    </>
  );
}
