const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,

                //  增加一个值
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                // 切换 completed 状态
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todos