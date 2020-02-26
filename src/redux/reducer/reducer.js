/**
 * counter reducer
 */

import { combineReducers } from 'redux'; // 创建仓库

import * as type from '../constants/actionTypes';

function counter(state = 0, action) {
    switch (action.type) {
        case type.INCREMENT:
            return state + 1
        case type.DECREMENT:
            return state - 1
        default:
            return state
    }
}


function todos(state = [], action) {
    switch (action.type) {
        case type.ADD_TODO:
            return state.concat([{ text: '一件事' }])
        default:
            return state
    }
}

export default combineReducers({
    counter,
    todos
})

// 使用 combineReducers 代替
// export default function RootReducer(state = {}, action) {
//     return {
//         counter: counter(state.count, action),
//         todos: todos(state.todos, action)
//     }
// }
