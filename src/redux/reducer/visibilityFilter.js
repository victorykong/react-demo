const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter; // 就是被映射到 props 上的 onClick 方法, 传递过来的 action 中包含的 FilterLink 的 ownProps 信息
        default:
            return state
    }
}

export default visibilityFilter 