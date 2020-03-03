import myActionCreator from './myActionCreator';

let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})


// thunk 函数
export const addTodoThunk = text => {


    // redux-thunk 中间件可以让 actionCreateFunction 返回的是一个 函数
    return (dispatch, getState) => {
        // 可以根据一些条件, 决定是否需要 dispatch
        dispatch(addTodo(text));
    }


    // return (dispatch, getState) => {

    //     // thunk middleware 调用的函数可以有返回值，
    //     // 它会被当作 dispatch 方法的返回值传递。
    //     return setTimeout(() => {
    //         console.log('settimeout1');
    //         dispatch(addTodo(text)); // 当 middleware 链中的最后一个 middleware 开始 dispatch action 时，这个 action 必须是一个普通对象。
    //     }, 1000)
    // }

}

// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })

// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })


const setVisibilityFilter = myActionCreator("SET_VISIBILITY_FILTER", 'filter');
const toggleTodo = myActionCreator("TOGGLE_TODO", 'id');

export { setVisibilityFilter, toggleTodo }



