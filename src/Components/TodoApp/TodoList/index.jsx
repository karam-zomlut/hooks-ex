import React from 'react'
import './style.css'

const TodoList = ({todos, setTodo}) => {
  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodo(updatedTodos);
  }
  return (
    <div className='todoList'>
      <h1>Todo List</h1>
      <ul>
        {
          todos.length ? (
            todos.map(todo => (
              <li key={todo.id}>
                <p className="todo-desc">{todo.desc}</p>
                <button className="todo-btn" onClick={() => (deleteTodo(todo.id))}>
                <i className="ri-delete-bin-line"></i>
                </button>
              </li>
            ))
          ) : 
          (
            <li>No Todos Found</li>
          )
        }
      </ul>
    </div>
  )
}

export default TodoList