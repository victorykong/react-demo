import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addTodoThunk } from '../actions/actions'

const AddTodo = props => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    // props.dispatch(addTodo(input.value))
                    props.dispatch(addTodoThunk(input.value))

                    input.value = ''
                }}
            >
                <input ref={node => input = node} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)