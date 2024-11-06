import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    // increment method
    const increment = () => {
        setCounter(counter+1);
    }

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary" onClick={() => setCounter(counter-1)}>-</button>
      <button type="button" className="btn ">{counter}</button>
      <button type="button" className="btn btn-primary" onClick={increment}>+</button>
    </div>
  )
}

export default Counter
