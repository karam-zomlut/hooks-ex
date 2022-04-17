import React from 'react'
import './style.css'

const TodoForm = ({value, setValue, todos, setTodo}) => {
  
  const addTodo = (e) => {
    e.preventDefault();
    if (value){
      const newTodo = {
        id: Date.now(),
        desc: value
      }
      setTodo(prevTodos => [...prevTodos, newTodo]);
      setValue('');
    } else{
      alert('Please enter a todo');
    }
  }

  return (
    <form className='todo-form'>
      <input type='text' placeholder='Enter your task' value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit' onClick={(e) => addTodo(e)}>Add</button>
    </form>
  )
}

export default TodoForm