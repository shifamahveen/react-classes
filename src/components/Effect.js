import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        // side effect
        console.log(`Count incremented to ${count}`); 

        // cleanup function
        return () => {
            console.log("cleanup function");
        }
    }, []); // dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setColor("yellow")}>Change Color</button>
    </div>
  )
}

export default Effect
