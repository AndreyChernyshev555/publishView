import * as actions from "./actionTypes";

export default function reducer(state=[], action) {
    let copyState = [];
    switch (action.type) {
        case actions.GOODS_ADD:
            let flag = false;
            for (let i = 0; i < state.length; i++) {
                if (state[i].title == action.info.title) {
                    flag = true;
                }
            }
            if (flag) {
                for (let i = 0; i < state.length; i++) {
                    let temp = {};
                    Object.assign(temp, state[i]);
                    if (state[i].title == action.info.title)
                        temp.amount+=1;
                    copyState.push(temp);
                }
                return copyState;
            }
            else {
                return [...state, {
                    title: action.info.title,
                    price: action.info.price,
                    path: action.info.path,
                    amount: 1
                }];
            }
        case actions.GOODS_REMOVE:
            for (let i = 0; i < state.length; i++) {
                if (state[i].title == action.info.title) continue;
                let temp = {};
                Object.assign(temp, state[i]);
                copyState.push(temp);
            }
            return copyState;
        case actions.GOODS_DECREMENT:
            for (let i = 0; i < state.length; i++) {
                for (let i = 0; i < state.length; i++) {
                    let temp = {};
                    Object.assign(temp, state[i]);
                    if (state[i].title == action.info.title)
                        if (state[i].amount > 1)
                            temp.amount-=1;
                    copyState.push(temp);
                }
                return copyState;
            }
            return copyState;
        default:
            console.log('default');
            return state;
    }
}
