import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'




function FormTodo({addTodo}){
    const [value, setValue] = useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }
    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>add todo</b></Form.Label>
                <Form.Control type='text' class='input' value = {value}
                 onChange= {e => setValue(e.target.value)} placeHolder= 'Add new todo'/>
            </Form.Group>
            
            <Form.Group>
                <Button variant= 'primary mb-3' type='submit'>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    )
}

export default FormTodo
