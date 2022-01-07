
import React, {useState} from 'react'

import './App.css';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Components/Todo'
import FormTodo from './Components/FormTodo'

const sample = [{
  text: 'This is a sample todo',
  isDone: false
}]

function App() {
  const [todos, setTodos] = useState(sample)

  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)

  }

  const markTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isDone = true
    setTodos(newTodos)
  }

  // const removeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
}
  
  return (
    <div className= 'app'>
      <div className= 'container'>
        <h1 className='text-center mb-4'> Todo List</h1>
        <FormTodo addTodo={addTodo}/>
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key = {index}
                  index = {index}
                  todo ={todo}
                  markTodo={markTodo}
                  removeTodo = {removeTodo}
                  />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;
