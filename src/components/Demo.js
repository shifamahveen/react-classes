import React, { useEffect } from 'react';
import { useState } from 'react';

const Demo = () => {
    // useState declaration
    const [color, setColor] = useState("pink");
    const [price, setPrice] = useState(2500);

    // method which calls setColor to change state value
    // const change = () => {
    //     setColor("green");
    // }

  return (
    <div>
      <p className='fs-1'>Color: {color}</p>
      <button onClick={() => setColor('blue')}>Change Color</button>
    </div>
  )
}

export default Demo
