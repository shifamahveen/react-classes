import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1); // 1
        setCount(count => count + 1); // 1+1 = 2
        setCount(count => count + 1); // 2+1 = 3
    }

    const increase = () => {
        setCount(count + 1); // 1
        setCount(count + 1); // 1
        setCount(count + 1); // 1
    }
    
  return (
    <div>
      <h1>Count : {count}</h1>
        <button onClick={increment}>Increment by 3</button>
    </div>
  )
}

export default Count
