import { connect } from 'react-redux'
import { toggleTodo } from '../actions';
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    // 因为有了 combineReducers 所以 state 还有另一个 visibilityFilter reducer 的信息
    return {
        // 根据 getVisibleTodos reducer 筛选出符合条件的 todos
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // 实际上已 dispatch 了一个 action, 参数 id 是由 mapDispatchToProps 映射到 props 上的 toggleTodo 提供的
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)