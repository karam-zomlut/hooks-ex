import React, { useState } from 'react';
import './style.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hooks Counter</h1>
      <h3 className="value">{count}</h3>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  )
}

export default Counter