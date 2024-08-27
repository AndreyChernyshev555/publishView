import * as actions from "./actionTypes";

export const addGoods = (goods) => ({
  type: actions.GOODS_ADD,
  info: goods,
});

export const removeGoods = (goods) => ({
  type: actions.GOODS_REMOVE,
  info: goods,
});

export const decrementGoods = (goods) => ({
  type: actions.GOODS_DECREMENT,
  info: goods,
});
