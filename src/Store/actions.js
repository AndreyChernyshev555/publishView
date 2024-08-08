import * as actions from './actionTypes';

export const addGoods = (goods) => ({
    type: actions.GOODS_ADD,
    info: goods
});

export const removeGoods = (id) => ({
    type: actions.GOODS_REMOVE,
    info: {id}
});
