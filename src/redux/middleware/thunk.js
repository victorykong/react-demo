/**
 * redux-thunk 的原理
 */


// 让你可以发起一个函数来替代 action
const thunk = store => next => action => {
    if (typeof action == 'function') {
        action(store.dispatch, store.getState);
    } else {
        next(action);
    }
}

export default thunk;