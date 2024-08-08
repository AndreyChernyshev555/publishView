import * as actions from "./actionTypes";

export default function reducer(state=[], action) {
    switch (action.type) {
        case actions.GOODS_ADD:
            if (state.filter(item => action.info.title == item.title).length == 0) {
                console.log(action.info);
                return [...state, {
                    title: action.info.title,
                    price: action.info.price
                }];
            }
            else return state;
        case action.GOODS_REMOVE:
            return state.filter(item => action.info.title !== item.title);
        default:
            return state;
    }
}
