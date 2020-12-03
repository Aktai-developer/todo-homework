import React,{useState} from 'react';
import './todoListItemStyle.css'

const TodoListItem = ({todo,deleteTodo, updateTodo,doneTodo}) => {
    const[editable,setEditable] = useState(false)
    const[updated,setUpdated] = useState(todo.title)
    const handleSave = (id) => {
        updateTodo(updated, id)
        setEditable(false)
    }
    const isDoneStyle = {
        color:"red",
        textDecoration: "line-through"
    }
    return (
        <div>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                {editable ? <input type="text" value={updated} onChange={e => setUpdated(e.target.value)}/> :
                    <h4 className='cursor' style={todo.done ? isDoneStyle : null} onClick={() => doneTodo(todo.id)}>{todo.title}</h4>
                }
                <div>
                    <button
                        className='btn btn-outline-warning mr-2 text-danger font-weight-bold'
                        onClick={() => editable ? handleSave(todo.id) : setEditable(true)}
                    >{editable ? "✓" : "Edit"}</button>
                    <button
                        className='btn btn-outline-danger text-warning font-weight-bold'
                        onClick={() => deleteTodo(todo.id)}
                    >Cancel</button>
                </div>
            </li>
        </div>
    );
};

export default TodoListItem;