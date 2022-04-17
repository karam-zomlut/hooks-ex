import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

const TodoApp = () => {
  const [value, setValue] = useState('');
  const [todos, setTodo] = useState([]);
  return (
    <div className='todoApp'>
      <h1>Todo App</h1>
      <TodoForm value={value} setValue={setValue} todos={todos} setTodo={setTodo} />
      <TodoList todos={todos} setTodo={setTodo} />
    </div>
  )
}

export default TodoApp