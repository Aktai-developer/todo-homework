import React from 'react'

const TodoTitle = ({todos}) => {
    return (
        <div className='d-flex justify-content-between align-items-center mt-5 mb-4'>
            <h1>TodoList</h1>
            <div>
                <span className='mr-2'>Total tasks:{todos.length}</span>
                <span>Total done:{todos.filter(el => el.done).length}</span>
            </div>
        </div>
    )
}

export default TodoTitle;