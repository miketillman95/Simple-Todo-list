import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'



function Todo({todo, index, markTodo, removeTodo}) {
    return (
        <div className= 'todo'>
            <span style={{ textDecoration: todo.isDone ? 'line-through': ''}}>
                {todo.text}
            </span>
            <div>
                <Button variant = 'outline-sucess' onClick = {() => 
                    markTodo(index)}>✓</Button>{''}

                <Button variant = 'outline-danger' onClick={() => 
                    removeTodo(index)}>x</Button>{''}
            </div>
        </div>
    )
}

export default Todo

